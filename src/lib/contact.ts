import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PASSWORD,
  EMAIL_TO,
  EMAIL_USER,
  EMAIL_FROM,
} from "./config";
import { ContactRequest } from "./models";

export async function sendEmail({
  name,
  message,
  email,
  phoneNumber,
  surname,
}: ContactRequest) {
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const htmlContent = `
    <p>${message}</p>
    </br>
    <ul>
      <li>Email: ${email}</li>
      <li>Phone Number: ${phoneNumber}</li>
    </ul>
  `;

  await transporter.sendMail({
    from: `${name} ${surname} <${EMAIL_FROM}>`,
    to: EMAIL_TO,
    subject: "Parnica İletişim",
    html: htmlContent,
  });
}
