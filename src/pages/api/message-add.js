import { sql } from '@vercel/postgres';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiter = new RateLimiterMemory({
  points: 2, // Her IP için izin verilen istek sayısı
  duration: 60, // 60 saniye içinde
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
 
export default async function handler(request, response) {
  try {
    // Rate limiting uygula
    const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    await rateLimiter.consume(ip);
    const name = request.body.name;
    const email = request.body.email;
    let phonenumber = request.body.phonenumber;
    phonenumber= phonenumber.replace("(", "");
    phonenumber= phonenumber.replace(")", "");
    const creationdate = new Date();
    const content = request.body.content;
    // if (!name || !email || !phonenumber || content) throw new Error('Message fields required');
    await sql`INSERT INTO arabulucu_message (name, email, phonenumber, content, creationdate) VALUES (${name}, ${email}, ${phonenumber}, ${content}, ${creationdate});`;
    // E-posta gönder
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'cagdas.karabulut@gmail.com',
      subject: 'Arabulucu.info - Yeni İletişim Formu Mesajı',
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phonenumber}</p>
        <p><strong>Mesaj:</strong> ${content}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return response.status(200).json("successfully saved and email sent");
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  // const arabulucu_message = await sql`SELECT * FROM arabulucu_message;`;
  // return response.status(200).json({ arabulucu_message });
}