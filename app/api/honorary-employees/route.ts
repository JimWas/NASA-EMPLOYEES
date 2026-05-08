import { NextResponse } from "next/server";
import { readHonoraryEmployees, writeHonoraryEmployees, HonoraryEmployee } from "@/lib/honorary-content";

export async function GET() {
  const employees = await readHonoraryEmployees();
  return NextResponse.json(employees);
}

export async function POST(request: Request) {
  try {
    const newEmployee = (await request.json()) as Omit<HonoraryEmployee, "id">;
    
    if (!newEmployee.name || !newEmployee.dreamRole || !newEmployee.promise) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const employees = await readHonoraryEmployees();
    
    const employee: HonoraryEmployee = {
      ...newEmployee,
      id: crypto.randomUUID(),
    };

    const updatedEmployees = [employee, ...employees].slice(0, 100); // Limit to 100 for now
    await writeHonoraryEmployees(updatedEmployees);
    
    return NextResponse.json(employee);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save employee." },
      { status: 500 }
    );
  }
}
