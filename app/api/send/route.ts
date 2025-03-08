import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Log on module load
console.log('API Route module loaded');

const resend = new Resend('re_7bMrk522_81Q94cN3wREnQRN9we9gCU91');

export async function POST(request: Request) {
  // Basic console log that should appear in server logs
  console.log('POST /api/send - received request');
  
  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['senditmoiway@gmail.com'],
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    console.log('Resend API response:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email'
      }, 
      { status: 500 }
    );
  }
} 