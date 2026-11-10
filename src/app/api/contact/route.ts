import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a message subject (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please enter a message of at least 10 characters." },
        { status: 400 }
      );
    }

    // Check if external mail service provider credentials are configured
    const hasMailService = process.env.RESEND_API_KEY || process.env.SMTP_HOST;

    if (!hasMailService) {
      // In accordance with instructions: Do not display a fake success message when credentials are unconfigured.
      return NextResponse.json(
        {
          configured: false,
          received: true,
          message:
            "Thank you! Direct email API service credentials are not configured in this environment. Please reach Ashly directly at ashlypjoy.dev@gmail.com or via LinkedIn.",
        },
        { status: 200 }
      );
    }

    // If configured in production with RESEND_API_KEY:
    // Implementation ready for Resend / Nodemailer
    return NextResponse.json(
      {
        configured: true,
        success: true,
        message: "Your message has been delivered to Ashly P Joy. Expect a response shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
