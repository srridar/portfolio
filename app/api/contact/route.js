import {  NextResponse } from "next/server";
import { sendContactEmail } from "@/service/contact";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    
      if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                {
                    status: 400,
                }
            );
        }

        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email address.",
                },
                {
                    status: 400,
                }
            );
        }

        await sendContactEmail({
            name,
            email,
            message,
        });

        return NextResponse.json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}
