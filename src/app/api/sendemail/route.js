const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASSWORD
    }
});

export async function POST(request) {
    try {
        const res = await request.json()

        const mailOptions = {
            from: res.email,
            to: 'skitband@yahoo.com',
            subject: res.subject,
            text: `<p>${res.message}</p>`,
            cc: ['skitband@yahoo.com', 'skitband00@gmail.com']
        };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
  
    } catch (error) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }
  
    return new Response('Success!', {
      status: 200,
    });
  }



