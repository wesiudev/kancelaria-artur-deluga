import mail from "@sendgrid/mail";

import { NextResponse } from "next/server";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
export async function GET(request) {
  const msg = {
    to: "wesiudev@gmail.com", // Change to your recipient
    from: "wesiudev@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  mail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
