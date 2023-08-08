import mail from "@sendgrid/mail";

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
export async function GET(request) {
  const msg = {
    to: "wesiudev@gmail.com", // Change to your recipient
    from: "wesiudev@gmail.com", // Change to your verified sender
    subject: "Nowe zlecenie od klienta",
    text: "Witam, chciałbym poprosić o wycenę rozprawy sądowej związanej z rozwodem. Proszę o kontakt na mój e-mail. Pozdrawiam",
    html: "<strong>Wysłano przez stronę localhost, w ramach testu.</strong>",
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
