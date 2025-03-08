import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_7bMrk522_81Q94cN3wREnQRN9we9gCU91');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'TentacleSoft Australia <onboarding@resend.dev>',
      to: ['senditmoiway@gmail.com'],
      subject: `[TentacleSoft Australia] Contact Form: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

--
TentacleSoft Australia
Software Development & Consulting
Sydney CBD, New South Wales 2000
Australia
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email'
      }, 
      { status: 500 }
    );
  }
}