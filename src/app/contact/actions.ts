"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    host: "mail.smatpay.africa",
    port: 587,
    secure: true,
    auth: {
      user: "noreply@smatpay.africa",
      pass: "?jPvp_cS3cObf0pGfor",
    },
  });

  await transporter.sendMail({
    from: "noreply@smatpay.africa",
    to: "billy@smatechgroup.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  // Optionally, return a success message or redirect
}
