import { NextResponse } from "next/server";
import { login } from "./command.service";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const result = await login(email, password);
  console.log(result);

  return NextResponse.json(result);
}
