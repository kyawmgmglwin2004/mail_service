import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.API_KEY,
  },
});


// CREATE FUNCTION
async function sentMailService(name, email, message) {
    
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.YOUR_PERSONAL_EMAIL,
    subject: "New message from your portfolio contact form",
    text: `You have a new message from:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  // send
  const info = await transporter.sendMail(mailOptions);
 
  return info;
}

// EXPORT
export default sentMailService;