"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useState } from "react";
import Offer from "./components/Offer";

const sendContactForm = async (data: any) =>
  fetch("/api/mail", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isOfferOpen, setOfferOpen] = useState(false);
  const handleScroll = (event: any) => {
    const scrollAmount = event.deltaY;
    console.log(currentScroll);
    if (scrollAmount === 100) {
      setCurrentScroll(currentScroll + 25);
    }
    if (scrollAmount === -100 && currentScroll > 0) {
      setCurrentScroll(currentScroll - 25);
    }
  };
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
    <div
      onWheel={handleScroll}
      className="absolute left-[0] top-0 w-screen h-screen z-[1500] overflow-hidden"
    >
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 min-h-[90vh] min-w-[90vw] rounded-3xl"></div>
      <div
        className={`fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 w-max h-max px-12 rounded-3xl py-6 duration-300 ${
          isContactOpen ? "z-[2000] opacity-100" : "z-[-1000] opacity-0"
        }`}
      >
        <h1 className="text-3xl text-center">Wypełnij potrzebne informacje</h1>

        <div className="flex flex-col space-y-3  mt-12">
          <div className="flex flex-row space-x-3">
            <div className="flex flex-col">
              Imię{" "}
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                id="fName"
                type="text"
                className="mt-2 text-black"
              />
            </div>
            <div className="flex flex-col ">
              Email{" "}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="mt-2 text-black"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            Treść{" "}
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-full resize-none text-black"
            ></textarea>
          </div>
        </div>
        <div className="w-full flex space-x-3">
          <button
            onClick={() => setContactOpen(false)}
            className="w-1/2 hover:underline py-2 mt-8"
          >
            Powrót
          </button>
          <button
            onClick={onSubmit}
            className="w-1/2 bg-purple-400 hover:bg-purple-300 duration-300 py-2 mt-8"
          >
            Wyślij
          </button>
        </div>
      </div>
      <div className={`relative w-full h-full duration-1000 `}>
        <ThreeGraces />
        <Header marginLeft={currentScroll} setOfferOpen={setOfferOpen} />
        <div className=" ml-[12vw] relative overflow-x-hidden">
          <Offer scroll={currentScroll} setContactOpen={setContactOpen} />
        </div>
      </div>
    </div>
  );
}
