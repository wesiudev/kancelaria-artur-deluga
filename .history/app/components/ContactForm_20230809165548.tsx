import { useState } from "react";

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
