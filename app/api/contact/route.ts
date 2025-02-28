import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // In a real implementation, you would send an email here
    // For example, using a service like Nodemailer, SendGrid, or AWS SES
    console.log("Sending email to: senditmoiway@gmail.com")
    console.log("From:", email)
    console.log("Name:", name)
    console.log("Subject:", subject)
    console.log("Message:", message)

    // For now, we'll just simulate a successful email send
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

