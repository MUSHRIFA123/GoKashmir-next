import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Replace with your email credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // your email to receive messages
      subject: `New Contact Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
