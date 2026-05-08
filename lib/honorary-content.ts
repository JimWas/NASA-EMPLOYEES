import { promises as fs } from "fs";
import path from "path";

export type HonoraryEmployee = {
  id: string;
  name: string;
  dreamRole: string;
  missionArea: string;
  promise: string;
};

const honoraryPath = path.join(process.cwd(), "content", "honorary-employees.json");

export async function readHonoraryEmployees(): Promise<HonoraryEmployee[]> {
  try {
    const file = await fs.readFile(honoraryPath, "utf-8");
    return JSON.parse(file) as HonoraryEmployee[];
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

export async function writeHonoraryEmployees(employees: HonoraryEmployee[]) {
  await fs.mkdir(path.dirname(honoraryPath), { recursive: true });
  await fs.writeFile(honoraryPath, JSON.stringify(employees, null, 2));
}
