import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    // Call your Task Manager BE to generate reset token
    const beRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const beData = await beRes.json();
    if (!beRes.ok) return NextResponse.json({ error: beData.error || 'User not found' }, { status: 400 });

    const resetToken = beData.token;
    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password?token=${resetToken}`;

    await sgMail.send({
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: 'Reset your Jobnme password',
      html: `
        <div style="background:#000;color:#fff;font-family:sans-serif;padding:40px;max-width:600px;margin:0 auto;border-radius:12px;">
          <h1 style="color:#facc15;font-size:32px;margin-bottom:8px;">job<span style="color:#fff;">nme</span></h1>
          <h2 style="color:#fff;margin-bottom:16px;">Reset Your Password</h2>
          <p style="color:#a1a1aa;">You requested a password reset. Click the button below to set a new password. This link expires in 1 hour.</p>
          <a href="${resetUrl}" style="display:inline-block;margin-top:24px;background:#facc15;color:#000;font-weight:900;padding:14px 28px;border-radius:10px;text-decoration:none;font-size:16px;">Reset Password</a>
          <p style="color:#52525b;margin-top:32px;font-size:12px;">If you didn't request this, ignore this email. Your password won't change.</p>
          <p style="color:#52525b;font-size:12px;">© 2025 Jobnme. All rights reserved.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Reset email sent' });
  } catch (err) {
    console.error('Forgot password error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
