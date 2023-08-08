import mail from "@sendgrid/mail";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
export async function POST(request) {
  const { email, firstName, message } = await request.json();
  console.log(email);
  const msg = {
    to: "wesiudev@gmail.com", // Change to your recipient
    from: "wesiudev@gmail.com", // Change to your verified sender
    subject: "Nowa wiadomość od klienta - kancelariadeluga.pl",
    text: "Witam, chciałbym poprosić o wycenę rozprawy sądowej związanej z rozwodem. Proszę o kontakt na mój e-mail. Pozdrawiam",
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css">.wrapper{width:100%,height:100%;} .form-heading{width:100%;text-align:left; padding:3px; border-bottom:2px solid #c4c4c4;} h1{text-align:center; } </style> </head> <body style="">
    <div class="wrapper">
    <h1>Nowa wiadomość od klienta</h1>
    <h3 class="form-heading" align="left">Imię:</h3><p class="form-answer" align="left">${firstName}</p>
    <h3 class="form-heading" align="left">Email:</h3><p class="form-answer" align="left">${email}</p>
    <h3 class="form-heading" align="left">Wiadomość</h3><p class="form-answer" align="left">${message}</p>
    </div></body></html>`,
  };
  mail.send(msg);
}
