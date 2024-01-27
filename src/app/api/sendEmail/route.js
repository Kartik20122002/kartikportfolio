import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer';
export async function POST(req  ) {
  const body = await req.text();
  const { userEmail  , subject  , msg  } = JSON.parse(body);

  try{
    const transporter = createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          pass: process.env.PASS,
          clientId: process.env.CID,
          clientSecret: process.env.CS,
          refreshToken: process.env.TOKEN
        }
      });

      const mailOptions = {
        from: userEmail,
        to: process.env.EMAIL,
        subject: subject,
        text: `From: ${userEmail},\nMessage: ${msg}`
      };

      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          return NextResponse.error(err); 
        }
        console.log(data);
        return NextResponse.json(data);
      });

      return NextResponse.json("wow")

    }
    catch(err){
    console.log('fetch error' , err);
    return NextResponse.error(err);
    }
    }