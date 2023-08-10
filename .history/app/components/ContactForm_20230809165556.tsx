import { useState } from "react";
const sendContactForm = async (data: any) =>
  fetch("/api/mail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export default function ContactForm() {
  const [isContactOpen, setContactOpen] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async () => {
    try {
      await sendContactForm({
        firstName: firstName,
        email: email,
        message: message,
      });
    } catch (error) {}
  };
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
