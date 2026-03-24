import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, budget, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Create transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,       // Your Gmail address
      pass: process.env.SMTP_PASSWORD,    // Gmail App Password (NOT your regular password)
    },
  });

  // Email to YOU (notification)
  const mailToYou = {
    from: `Portfolio Contact <${process.env.SMTP_EMAIL}>`,
    to: process.env.SMTP_EMAIL,
    replyTo: email,
    subject: `New Project Inquiry from ${name}`,
    html: `
      <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf7; border-radius: 12px; overflow: hidden;">
        <div style="background: #1a6b4e; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New Project Inquiry</h1>
          <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0;">Someone wants to work with you!</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; font-weight: 600; color: #8a8a85; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; color: #1a1a18; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; font-weight: 600; color: #8a8a85; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; color: #1a1a18; font-size: 15px;"><a href="mailto:${email}" style="color: #1a6b4e;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; font-weight: 600; color: #8a8a85; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e6e4de; color: #1a1a18; font-size: 15px;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #8a8a85; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1a1a18; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Your Project Inquiry" style="display: inline-block; background: #1a6b4e; color: #fff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${name}</a>
          </div>
        </div>
        <div style="background: #f3f2ed; padding: 20px; text-align: center; font-size: 12px; color: #8a8a85;">
          Sent from your portfolio contact form
        </div>
      </div>
    `,
  };

  // Auto-reply to the CLIENT (confirmation)
  const mailToClient = {
    from: `Alisha Khan <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: `Thanks for reaching out, ${name}!`,
    html: `
      <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf7; border-radius: 12px; overflow: hidden;">
        <div style="background: #1a6b4e; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 22px; margin: 0;">Thank You, ${name}!</h1>
          <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 8px 0 0;">I've received your message</p>
        </div>
        <div style="padding: 32px; color: #484845; font-size: 15px; line-height: 1.8;">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your project inquiry and I'm excited to learn more about what you're looking for.</p>
          <p>I'll review your message and get back to you <strong>within 24 hours</strong> with my thoughts and a plan.</p>
          <p>In the meantime, feel free to check out my recent work:</p>
          <div style="text-align: center; margin: 24px 0;">
            <a href="https://github.com/alishakhanimran724-gif" style="display: inline-block; background: #1a6b4e; color: #fff; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: 600;">View My Projects</a>
          </div>
          <p>Best regards,<br><strong>Alisha Khan</strong><br>Full Stack Developer</p>
        </div>
        <div style="background: #f3f2ed; padding: 20px; text-align: center; font-size: 12px; color: #8a8a85;">
          This is an automated reply from alishakhan.dev
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToClient);

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
