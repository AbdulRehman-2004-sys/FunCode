import dbConnect from "../../../lib/db";
import Contact from "../../../models/Contact";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1. Connect to DB
    await dbConnect();

    // 2. Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide all fields" },
        { status: 400 }
      );
    }

    // 3. Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 4. Send Auto-reply Email
    // Note: This requires EMAIL_USER and EMAIL_PASS in .env.local
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail", // or your provider
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // 4a. Send Auto-reply to User
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email, // User's email
          subject: `Re: ${subject} - Receipt Confirmation`,
          html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2>Hi ${name},</h2>
                        <p>Thank you for contacting us. We have received your message regarding "<strong>${subject}</strong>".</p>
                        <p>Our team will review your inquiry and get back to you shortly.</p>
                        <br>
                        <p>Best regards,</p>
                        <p><strong>Agency Team</strong></p>
                        <hr>
                        <h3>Your Message:</h3>
                        <p>${message}</p>
                    </div>
                `,
        };

        await transporter.sendMail(mailOptions);

        // 4b. Send Notification to Owner
        const ownerMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself (Owner)
          subject: `New Contact Submission: ${subject}`,
          html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <hr>
                        <h3>Message:</h3>
                        <p>${message}</p>
                        <hr>
                        <p><em>This message was sent from your website contact form.</em></p>
                    </div>
                `,
        };

        await transporter.sendMail(ownerMailOptions);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // We don't fail the request if email fails, just log it
      }
    }

    return NextResponse.json(
      { success: true, data: contact, message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
