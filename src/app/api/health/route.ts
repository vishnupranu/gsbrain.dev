import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const health = {
    status: 'healthy',
    service: 'gsbrain.dev',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '0.1.0',
    environment: process.env.NODE_ENV || 'production',
    checks: {
      server: 'ok',
      uptime: process.uptime(),
    },
  };

  return NextResponse.json(health, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
