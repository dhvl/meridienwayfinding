import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    const trimmedName = (name || '').trim();
    const trimmedEmail = (email || '').trim();
    const trimmedMessage = (message || '').trim();
    const contactEmail = process.env.CONTACT_EMAIL || 'info@meridianwayfinding.co.uk';
    const fromEmail = process.env.FROM_EMAIL || 'Meridian Wayfinding <onboarding@resend.dev>';

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json({ error: 'Missing required fields (Name, Email, Message)' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(trimmedEmail);
    const replyTo = isValidEmail ? trimmedEmail : 'do-not-reply@meridianwayfinding.co.uk';

    const emailNote = isValidEmail
      ? ''
      : "<p style='color: red; font-weight: bold;'>⚠️ WARNING: The sender provided an invalid email format. Please check their phone number or organisation details.</p>";

    const htmlContent = `
      ${emailNote}
      <h2>New Wayfinding Project Inquiry</h2>
      <p><strong>Name:</strong> ${trimmedName}</p>
      <p><strong>Organisation / Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Email:</strong> ${trimmedEmail} ${!isValidEmail ? '(INVALID)' : ''}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Project Type / Sector:</strong> ${service || 'N/A'}</p>
      <hr />
      <p><strong>Project Description / Message:</strong></p>
      <p style="white-space: pre-wrap;">${trimmedMessage}</p>
    `;

    if (!resend) {
      console.warn('RESEND_API_KEY not set. Simulating successful send in development.');
      return NextResponse.json({ message: 'Inquiry received (Development mode)' }, { status: 200 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `New Wayfinding Inquiry: ${service || 'General'} from ${trimmedName}`,
      html: htmlContent,
      reply_to: replyTo,
    });

    return NextResponse.json({ message: 'Inquiry sent successfully', data }, { status: 200 });
  } catch (error: any) {
    console.error('Error in send-inquiry API:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
