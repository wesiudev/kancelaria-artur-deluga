import mail from "@sendgrid/mail";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
export async function GET(request) {
  const msg = {
    to: "wesiudev@gmail.com", // Change to your recipient
    from: "wesiudev@gmail.com", // Change to your verified sender
    subject: "Nowe zlecenie od klienta",
    text: "Witam, chciałbym poprosić o wycenę rozprawy sądowej związanej z rozwodem. Proszę o kontakt na mój e-mail. Pozdrawiam",
    html: `<div style="display:flex;flex-direction:column;"><h1 style="">Nowe zapytanie od klienta</h1><br/>
    <div style="border-bottom:2px solid blue;padding:3px; margin-top:8px;margin-bottom:8px;">Imię klienta: Paweł</div><br/>
    <div style="border-bottom:2px solid blue;padding:3px; margin-top:8px;margin-bottom:8px;">Wiadomość: <span style="color:blue;">Witam, chciałbym poprosić o wycenę rozprawy sądowej związanej z rozwodem. Proszę o kontakt na mój e-mail. Pozdrawiam, Paweł</span></div><br/>
    <div style="border-bottom:2px solid blue;padding:3px; margin-top:8px;margin-bottom:8px;">Email klienta: wesiudev@gmail.com</div></div>`,
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
