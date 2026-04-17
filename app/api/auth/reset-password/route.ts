import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();
    if (!token || !password) return NextResponse.json({ error: 'Token and password required' }, { status: 400 });

    // Call Task Manager BE to validate token and update password in Supabase
    const beRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    });

    const beData = await beRes.json();
    if (!beRes.ok) return NextResponse.json({ error: beData.error || 'Invalid or expired token' }, { status: 400 });

    return NextResponse.json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error('Reset password error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
