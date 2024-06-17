import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import data from './data.json';

interface Context {
  params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
  return NextResponse.json({ data: data });
}
