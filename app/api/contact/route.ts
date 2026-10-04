import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  );
}

function createContactEmailHtml(name: string, email: string, message: string) {
  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New portfolio message</title>
  </head>
  <body style="margin:0;background:#f1f1f0;color:#111111;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      New message from ${escapedName} through your portfolio contact form.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f1f1f0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#ffffff;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#111111;padding:28px 32px;">
                <p style="margin:0;color:#ff534a;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Portfolio contact</p>
                <h1 style="margin:14px 0 0;color:#ffffff;font-size:28px;line-height:1.2;">You have a new message.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px;color:#4b5563;font-size:16px;line-height:1.6;">
                  Someone reached out through your website. You can reply directly to this email.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:24px;background:#f8f8f7;border-left:4px solid #ff534a;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0 0 8px;color:#111111;font-size:18px;font-weight:700;">${escapedName}</p>
                      <a href="mailto:${escapedEmail}" style="color:#ff534a;font-size:14px;text-decoration:none;">${escapedEmail}</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 10px;color:#6b7280;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Message</p>
                <div style="padding:20px;background:#ffffff;border:1px solid #e5e7eb;color:#374151;font-size:16px;line-height:1.7;word-break:break-word;">
                  ${escapedMessage}
                </div>
                <p style="margin:28px 0 0;color:#9ca3af;font-size:12px;line-height:1.5;">
                  Sent from your portfolio contact form.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px;background:#111111;color:#9ca3af;font-size:12px;">
                Murad Hossain &middot; Web Developer
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error('Contact email is not configured.');
    return NextResponse.json(
      { error: 'The contact form is not configured yet.' },
      { status: 500 },
    );
  }

  let body: { name?: unknown; email?: unknown; message?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request data.' },
      { status: 400 },
    );
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: 'Please enter a valid name.' },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return NextResponse.json(
      { error: 'Please enter a message under 5000 characters.' },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const subjectName = name.replace(/[\r\n]/g, ' ');

  try {
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `New portfolio message from ${subjectName}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: createContactEmailHtml(name, email, message),
    });

    if (error) {
      console.error('Resend rejected contact email:', error);
      return NextResponse.json(
        { error: 'We could not send your message. Please try again.' },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error('Contact email request failed:', error);
    return NextResponse.json(
      { error: 'We could not send your message. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: 'Your message has been sent.' });
}
