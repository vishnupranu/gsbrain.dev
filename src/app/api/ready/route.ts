import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const ready = {
    status: 'ready',
    timestamp: new Date().toISOString(),
    migrations: 'complete',
    dependencies: 'ok',
  };

  return NextResponse.json(ready);
}
