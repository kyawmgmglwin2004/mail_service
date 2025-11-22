import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// create transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_EMAIL,
    pass: process.env.BREVO_API_KEY,
  },
});

// CREATE FUNCTION
async function sendMailService(name, email, message) {
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.YOUR_PERSONAL_EMAIL,
    subject: "New message from your portfolio contact form",
    text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // send
  return await transporter.sendMail(mailOptions);
}

// EXPORT
export default {
  sendMailService,
};
