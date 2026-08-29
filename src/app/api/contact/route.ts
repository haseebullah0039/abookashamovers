import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const city = String(body.city ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();
  // Honeypot field — real users never fill this in; bots usually do.
  const website = String(body.website ?? "").trim();

  if (website) {
    // Silently pretend success so bots don't learn anything.
    return NextResponse.json({ ok: true });
  }

  if (!fullName || !phone || !email) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, and email." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toAddress = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set.");
    return NextResponse.json(
      { ok: false, error: "Email is not configured on the server yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const lines = [
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    city && `City: ${city}`,
    service && `Service: ${service}`,
    message && `Message: ${message}`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from: `"ABO Okasha Movers Website" <${gmailUser}>`,
      to: toAddress,
      replyTo: email,
      subject: `New quote request from ${fullName}`,
      text: lines.join("\n"),
      html: `<div style="font-family:sans-serif;font-size:14px;line-height:1.6">
        <h2 style="color:#c0121a;margin:0 0 12px">New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${city ? `<p><strong>City:</strong> ${escapeHtml(city)}</p>` : ""}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
        ${message ? `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
      </div>`,
    });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send your message. Please try again or call/WhatsApp us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
