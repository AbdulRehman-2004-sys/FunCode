import dbConnect from "../../../lib/db";
import Quote from "../../../models/Quote";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, services, budget, currency, projectDetails } =
      await req.json();

    // 1. Connect to DB
    await dbConnect();

    // 2. Validate input
    if (!name || !email || !budget || !currency || !projectDetails) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // 3. Save to MongoDB
    const quote = await Quote.create({
      name,
      email,
      services: services || [],
      budget,
      currency,
      projectDetails,
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
          subject: `Re: Your Quote Request - Receipt Confirmation`,
          html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2>Hi ${name},</h2>
                        <p>Thank you for requesting a quote. We have received your project details.</p>
                        <p>Our team will review your requirements and provide you with a detailed estimate shortly.</p>
                        <br>
                        <p>Best regards,</p>
                        <p><strong>Agency Team</strong></p>
                        <hr>
                        <h3>Your Request Details:</h3>
                        <p><strong>Services:</strong> ${
                          services ? services.join(", ") : "None"
                        }</p>
                        <p><strong>Budget:</strong> ${budget} ${currency}</p>
                        <p><strong>Project Details:</strong></p>
                        <p>${projectDetails}</p>
                    </div>
                `,
        };

        await transporter.sendMail(mailOptions);

        // 4b. Send Notification to Owner
        const ownerMailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself (Owner)
          subject: `New Quote Request from ${name}`,
          html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2>New Quote Request</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Services:</strong> ${
                          services ? services.join(", ") : "None"
                        }</p>
                        <p><strong>Budget:</strong> ${budget} ${currency}</p>
                        <hr>
                        <h3>Project Details:</h3>
                        <p>${projectDetails}</p>
                        <hr>
                        <p><em>This request was sent from your website quote form.</em></p>
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
      {
        success: true,
        data: quote,
        message: "Quote request sent successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
