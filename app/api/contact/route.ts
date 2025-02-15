import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { google } from "googleapis";
import { NextResponse } from "next/server";

const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = process.env.SMTP_PORT!;
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;
const GMAILID=process.env.GMAILID!;

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phoneNumber, selectedPackage, message } = body;

  if (!firstName || !lastName || !email || !selectedPackage || !message) {
    return NextResponse.json({ error: "All required fields must be provided." }, { status: 400 });
  }

  try {
    // OAuth2 client setup
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Get a fresh access token
    const accessToken = await oAuth2Client.getAccessToken();

    // Nodemailer transporter (Explicitly using SMTPTransport.Options)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465, // Use 587 if you prefer STARTTLS instead of SSL
      secure: true, // Use `false` for port 587
      auth: {
        type: "OAuth2",
        user: GMAILID,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token!,
      },
    } as SMTPTransport.Options);

    // Email HTML Template
    const emailTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
        }
        .email-header {
          background-color: #F2C165;
          color: #000000;
          text-align: center;
          padding: 20px;
        }
        .email-body {
          padding: 20px;
          line-height: 1.6;
        }
        .email-footer {
          background-color: #f8f8f8;
          text-align: center;
          padding: 15px;
          font-size: 12px;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <table class="email-container">
        <tr>
          <td class="email-header">
            <h1>Veera Rental</h1>
            <h3>Thank You for Reaching Out</h3>
            <p>We’ve Received Your Submission</p>
          </td>
        </tr>
        <tr>
          <td class="email-body">
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for contacting us at <strong>Veera Rental</strong>. We have received your message and our team will get back to you as soon as possible.</p>
            <p><strong>Details Submitted:</strong></p>
            <ul>
              <li><strong>Service:</strong> ${selectedPackage}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phoneNumber}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>We appreciate your interest in our services.</p>
            <p>Best regards,<br>The Veera Rentals Team</p>
          </td>
        </tr>
        <tr>
          <td class="email-footer">
            <p>&copy; 2025 Veera Rentals. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Define mail options
    const mailOptions = {
      from: `"Veera Rentals" <${GMAILID}>`,
      to: email,
      cc: GMAILID,
      subject: "We’ve Received Your Submission",
      html: emailTemplate,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}