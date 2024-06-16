import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import data from './data.json';

interface Context {
  params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({ data: data });
}
