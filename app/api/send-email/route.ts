import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    console.log(firstName, lastName, email, subject, message);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "asadalijangoo@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: `
        <h1>New Message from Contact Form</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
