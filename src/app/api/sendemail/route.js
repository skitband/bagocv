import { supabase } from '../../../utils/supabase';

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

      // process supabase
      const { data, error } = await supabase.from('messages').insert([
        { email: res.email, subject: res.subject, message: res.message },
      ]);

      if (error) {
        return new Response(`Error saving to supabase: ${error.message}`, {
          status: 400,
        });
      } else {
        console.log('Contact form submission successful:', data);
      }
  
    } catch (error) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }
  
    return new Response('Success!', {
      status: 200,
    });
}


export async function GET() {

  try {

    const { data, error } = await supabase.from('messages').select('messages');

  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response('Success!', {
    status: 200,
  });
}



