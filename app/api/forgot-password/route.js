import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Generate a simple reset token
    const resetToken = Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    
    // In a real app, you'd store this token in your database
    // For now, we'll just log it to console
    console.log('\n=== PASSWORD RESET REQUEST ===');
    console.log(`Email: ${email}`);
    console.log(`Reset Token: ${resetToken}`);
    console.log(`Reset URL: http://localhost:3000/reset-password?token=${resetToken}`);
    console.log('==============================\n');

    // Simulate success response
    return NextResponse.json({ 
      message: 'Password reset link sent to your email!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ 
      error: 'Failed to process reset request' 
    }, { status: 500 });
  }
}
