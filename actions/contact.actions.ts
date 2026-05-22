"use server";
import nodemailer from "nodemailer";

export async function sendContactMessage(formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "Please fill in all required fields." };
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    const smtpUser = "malaniharshal95@gmail.com";
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      return {
        success: false,
        error: "Messages are currently unavailable. Please try again later."
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${formData.name} via Portfolio" <${smtpUser}>`,
      to: "malaniharshal95@gmail.com",
      replyTo: formData.email,
      subject: formData.subject ? `Portfolio: ${formData.subject}` : `New Message from ${formData.name}`,
      text: `New contact message from your portfolio website:
      
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || "No Subject"}
Message:
${formData.message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Letter from Portfolio</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                background-color: #f5f0e6;
                color: #2d2d2d;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #f9f6f0;
                border: 1px solid #ebd9c8;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(235, 217, 200, 0.2);
                overflow: hidden;
              }
              .header {
                background-color: #1a1a1a;
                color: #f9f6f0;
                padding: 24px;
                text-align: center;
                border-bottom: 2px solid #d97706;
              }
              .header h1 {
                margin: 0;
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              }
              .content {
                padding: 32px 24px;
                position: relative;
              }
              .salutation {
                font-family: Georgia, serif;
                font-size: 20px;
                font-style: italic;
                font-weight: bold;
                margin-bottom: 20px;
                color: #1a1a1a;
              }
              .message-box {
                background-color: #ffffff;
                border-left: 3px solid #d97706;
                padding: 16px 20px;
                margin: 20px 0;
                font-family: Georgia, serif;
                font-style: italic;
                font-size: 15px;
                line-height: 1.6;
                color: #4a4a4a;
                border-radius: 0 8px 8px 0;
                border-top: 1px solid #ebd9c8;
                border-right: 1px solid #ebd9c8;
                border-bottom: 1px solid #ebd9c8;
              }
              .meta-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 24px;
              }
              .meta-table td {
                padding: 10px 0;
                border-bottom: 1px dashed #ebd9c8;
              }
              .meta-label {
                font-weight: 600;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #d97706;
                width: 100px;
              }
              .meta-value {
                font-size: 14px;
                color: #2d2d2d;
              }
              .footer {
                background-color: #f5f0e6;
                border-top: 1px solid #ebd9c8;
                padding: 16px 24px;
                text-align: center;
                font-size: 12px;
                color: #7a7a7a;
              }
              .reply-btn {
                display: inline-block;
                background-color: #1a1a1a;
                color: #ffffff !important;
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 13px;
                margin-top: 16px;
                border: 1px solid #1a1a1a;
                letter-spacing: 0.5px;
              }
              .reply-btn:hover {
                background-color: #333333;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Letter Received</h1>
              </div>
              <div class="content">
                <div class="salutation">Dear Harshal,</div>
                <p style="font-size: 14px; line-height: 1.5; color: #555555; margin-bottom: 24px;">
                  You have received a new letter from your portfolio's contact form. Here are the details:
                </p>
                
                <table class="meta-table">
                  <tr>
                    <td class="meta-label">Sender</td>
                    <td class="meta-value"><strong>${formData.name}</strong></td>
                  </tr>
                  <tr>
                    <td class="meta-label">Email</td>
                    <td class="meta-value"><a href="mailto:${formData.email}" style="color: #d97706; text-decoration: none;">${formData.email}</a></td>
                  </tr>
                  <tr>
                    <td class="meta-label">Subject</td>
                    <td class="meta-value">${formData.subject || "No Subject"}</td>
                  </tr>
                </table>
                
                <div class="meta-label" style="margin-bottom: 8px;">Message:</div>
                <div class="message-box">
                  ${formData.message.replace(/\n/g, "<br>")}
                </div>
                
                <div style="text-align: center; margin-top: 32px; margin-bottom: 16px;">
                  <a href="mailto:${formData.email}?subject=Re: ${encodeURIComponent(formData.subject || "Your message to Harshal")}" class="reply-btn">Reply to Sender</a>
                </div>
              </div>
              <div class="footer">
                Sent from Harshal's Personal Portfolio Website.
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent to Harshal! Hopping to connect with you soon !" };
  } catch (error: any) {
    console.error("Error sending contact message email:", error);
    return { success: false, error: "Message not sent, try again later " };
  }
}

