import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/app/top_headlines.json",
      "utf8",
    );
    const data = JSON.parse(file);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Failed to read JSON:", error);
    return NextResponse.json(
      { success: false, error: "Could not read data" },
      { status: 500 },
    );
  }
}
