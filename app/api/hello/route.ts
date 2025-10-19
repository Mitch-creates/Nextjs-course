import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(req: Request) {
  const { name } = await req.json();

  return NextResponse.json({ message: `${name} received` });
}
