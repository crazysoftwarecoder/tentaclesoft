import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_jZTVUQVz_MKPKNDuuuAfZPT6pcR7cvRcK');

export async function POST(request: Request) {
  try {
    console.log('Received request to send email');
    const { name, email, subject, message } = await request.json();
    
    console.log('Sending email with data:', { name, email, subject });

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

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email'
      }, 
      { status: 500 }
    );
  }
} 