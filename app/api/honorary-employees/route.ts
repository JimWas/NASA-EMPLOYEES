import { NextResponse } from "next/server";
import {
  createHonoraryEmployee,
  getRequesterHash,
  readHonoraryEmployees,
  validateHonoraryEmployee
} from "@/lib/honorary-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const employees = await readHonoraryEmployees();
  return NextResponse.json(employees);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateHonoraryEmployee(body);

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const saved = await createHonoraryEmployee(result.employee, getRequesterHash(request));

    if (saved.error || !saved.employee) {
      return NextResponse.json(
        { error: saved.error ?? "Unable to save employee entry." },
        { status: saved.status ?? 500 }
      );
    }

    return NextResponse.json(saved.employee, { status: 201 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save employee entry." },
      { status: 500 }
    );
  }
}
