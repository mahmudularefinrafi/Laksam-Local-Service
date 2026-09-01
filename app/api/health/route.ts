import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "laksam-local-service",
    database: process.env.NEXT_PUBLIC_SUPABASE_URL ? "configured" : "not_configured",
    timestamp: new Date().toISOString(),
  });
}
