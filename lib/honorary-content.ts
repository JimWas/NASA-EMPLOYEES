import { neon } from "@neondatabase/serverless";
import crypto from "crypto";

export type HonoraryEmployee = {
  id: string;
  name: string;
  dreamRole: string;
  missionArea: string;
  promise: string;
  createdAt?: string;
};

export type HonoraryEmployeeInput = Omit<HonoraryEmployee, "id" | "createdAt">;

const missionAreas = new Set([
  "Human Exploration",
  "Earth & Climate",
  "Robotics",
  "Space Science",
  "Technology",
  "Mission Operations",
  "Public Service",
  "Education"
]);

const blockedPatterns = [
  /https?:\/\//i,
  /\bwww\./i,
  /@/,
  /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
  /\b\d{1,5}\s+\w+\s+(street|st|avenue|ave|road|rd|drive|dr|lane|ln|blvd)\b/i
];

let tableReady = false;

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  return neon(databaseUrl);
}

async function ensureTable() {
  if (tableReady) {
    return true;
  }

  const sql = getSql();

  if (!sql) {
    return false;
  }

  await sql`
    CREATE TABLE IF NOT EXISTS honorary_employees (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      dream_role TEXT NOT NULL,
      mission_area TEXT NOT NULL,
      promise TEXT NOT NULL,
      ip_hash TEXT,
      is_visible BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS honorary_employees_visible_created_idx
    ON honorary_employees (is_visible, created_at DESC)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS honorary_employees_ip_created_idx
    ON honorary_employees (ip_hash, created_at DESC)
  `;

  tableReady = true;
  return true;
}

function clean(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function hasPrivateInfo(value: string) {
  return blockedPatterns.some((pattern) => pattern.test(value));
}

export function validateHonoraryEmployee(input: Partial<HonoraryEmployeeInput>) {
  const employee: HonoraryEmployeeInput = {
    name: clean(input.name, 40),
    dreamRole: clean(input.dreamRole, 60),
    missionArea: clean(input.missionArea, 40),
    promise: clean(input.promise, 180)
  };

  if (!employee.name || !employee.dreamRole || !employee.promise) {
    return { error: "Add a display name, dream role, and mission promise." };
  }

  if (!missionAreas.has(employee.missionArea)) {
    return { error: "Choose a valid mission area." };
  }

  const combined = `${employee.name} ${employee.dreamRole} ${employee.promise}`;

  if (hasPrivateInfo(combined)) {
    return {
      error:
        "Please avoid private info like emails, phone numbers, addresses, or links."
    };
  }

  return { employee };
}

export function getRequesterHash(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";
  const salt = process.env.HONORARY_HASH_SALT ?? "honorary-nasa-employees";
  const ip = forwardedFor.split(",")[0]?.trim() ?? "unknown";

  return crypto.createHash("sha256").update(`${salt}:${ip}:${userAgent}`).digest("hex");
}

export async function readHonoraryEmployees(): Promise<HonoraryEmployee[]> {
  const ready = await ensureTable();

  if (!ready) {
    return [];
  }

  const sql = getSql();

  if (!sql) {
    return [];
  }

  const rows = await sql`
    SELECT id, name, dream_role, mission_area, promise, created_at
    FROM honorary_employees
    WHERE is_visible = TRUE
    ORDER BY created_at DESC
    LIMIT 100
  `;

  return rows.map((row) => ({
    id: String(row.id),
    name: String(row.name),
    dreamRole: String(row.dream_role),
    missionArea: String(row.mission_area),
    promise: String(row.promise),
    createdAt: new Date(String(row.created_at)).toISOString()
  }));
}

export async function createHonoraryEmployee(
  employee: HonoraryEmployeeInput,
  ipHash: string
): Promise<{ employee?: HonoraryEmployee; error?: string; status?: number }> {
  const ready = await ensureTable();

  if (!ready) {
    return {
      error: "Database storage is not connected yet. Add a Vercel Neon database first.",
      status: 503
    };
  }

  const sql = getSql();

  if (!sql) {
    return {
      error: "Database storage is not connected yet. Add a Vercel Neon database first.",
      status: 503
    };
  }

  const recent = await sql`
    SELECT COUNT(*)::int AS count
    FROM honorary_employees
    WHERE ip_hash = ${ipHash}
      AND created_at > NOW() - INTERVAL '1 hour'
  `;

  if (Number(recent[0]?.count ?? 0) >= 5) {
    return {
      error: "Please wait a bit before adding more honorary employees.",
      status: 429
    };
  }

  const id = crypto.randomUUID();

  const rows = await sql`
    INSERT INTO honorary_employees (id, name, dream_role, mission_area, promise, ip_hash)
    VALUES (
      ${id},
      ${employee.name},
      ${employee.dreamRole},
      ${employee.missionArea},
      ${employee.promise},
      ${ipHash}
    )
    RETURNING id, name, dream_role, mission_area, promise, created_at
  `;

  const row = rows[0];

  return {
    employee: {
      id: String(row.id),
      name: String(row.name),
      dreamRole: String(row.dream_role),
      missionArea: String(row.mission_area),
      promise: String(row.promise),
      createdAt: new Date(String(row.created_at)).toISOString()
    }
  };
}
