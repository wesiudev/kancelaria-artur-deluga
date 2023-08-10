"use client";
import Image from "next/image";
import paragraphImage from "@/app/assets/paragraph.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
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

export default function OfferMobile() {
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
    <div className="w-full mx-auto z-[2000] bg-gradient-to-br from-gray-500 via-zinc-500 to-gray-500 overflow-x-hidden text-black">
      <Image
        src={paragraphImage}
        alt="Paragraf obrazek w tle"
        width={224}
        height={224}
        className="fixed opacity-10 left-[50%] -translate-x-[50%] lg:-translate-x-0 lg:left-24 top-[50%] -translate-y-[50%]"
      />
      <div className="flex flex-col space-x-[100px] min-h-screen items-center py-24">
        <div className="flex flex-col w-[85vw] lg:w-[70vw] 2xl:w-[60vw] min-h-screen justify-center ">
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-row justify-between">
              <div className="w-1/2">
                <Link
                  className="group flex flex-row items-center mb-12 text-xl w-max text-white"
                  href="/"
                >
                  <FaArrowLeft className="mr-2 " />
                  <span className="hover:underline hover:underline-offset-4">
                    {" "}
                    Powrót
                  </span>
                </Link>
              </div>
              <div className="text-white">
                <h1 className="text-xl lg:text-2xl text-right sm:text-left font-bold">
                  Kancelaria Radcy Prawnego
                </h1>
                <div className="w-full flex justify-end">
                  <h2 className="text-xl mb-12 lg:mb-0 mt-2">Artur Deluga</h2>
                </div>
                <div
                  className={` flex-row space-x-2 text-sm justify-end mt-3 mb-12 hidden lg:flex`}
                >
                  <div>ul. Kościelna 15-17/7</div>
                  <div>86-300 Grudziądz</div>
                </div>
              </div>
            </div>

            <div className=" rounded-2xl  text-white">
              <div className="w-max">
                <h1 className="w-max text-4xl md:text-5xl lg:text-7xl text-white caps font-bold">
                  Oferowane usługi
                </h1>
                <div className="h-1 w-full mb-6 bg-green-600" />
              </div>

              <h2 className="text-left text-xl w-full lg:w-3/4 ">
                Nasza kancelaria oferuje{" "}
                <span className="font-bold"> kompleksową pomoc prawną</span>,
                dedykowaną{" "}
                <span className="font-bold">klientom indywidualnym</span>,{" "}
                <span className="font-bold">urzędom</span> oraz{" "}
                <span className="font-bold">podmiotom gospodarczym</span>.
                Specjalizujemy się w następującym zakresie dziedzin prawa:
              </h2>
            </div>
          </div>
          <div className="relative text-black flex flex-col space-y-12 mt-24">
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  rounded-md bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-xl lg:text-3xl font-bold">Prawo Karne</h1>
              <p className="text-sm sm:text-xl mt-3 italic">
                Pomoc prawna na każdym etapie postępowania karnego między
                innymi:{" "}
                <span className="font-bold">
                  postępowanie przygotowawcze, obrona w postępowaniu sądowym,
                  reprezentacja pokrzywdzonego.
                </span>
              </p>
            </div>
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  rounded-md bg-white  flex flex-col justify-between p-6">
              <h1 className="text-xl lg:text-3xl font-bold">
                Prawo gospodarcze
              </h1>
              <p className="text-sm sm:text-xl mt-3 italic">
                Windykacja należności, sprawy o{" "}
                <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">
                  stała obsługa podmiotów gospodarczych
                </span>
              </p>
            </div>

            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default rounded-md bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-xl lg:text-3xl font-bold">Prawo cywilne</h1>
              <p className="text-sm sm:text-xl mt-3 italic">
                Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">odszkodowanie</span> i{" "}
                <span className="font-bold">zadośćuczynienie</span>,{" "}
                <span className="font-bold">sprawy spadkowe</span>, sprawy z
                zakresu prawa rzeczowego
              </p>
            </div>
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default rounded-md  bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-xl lg:text-3xl font-bold">Prawo Rodzinne</h1>
              <p className="text-sm sm:text-xl mt-3 italic">
                Sprawy o <span className="font-bold">rozwód</span>,{" "}
                <span className="font-bold">alimenty</span>,{" "}
                <span className="font-bold">kontakty z dzieckiem</span>,{" "}
                <span className="font-bold">
                  wykonywanie władzy rodzicielskiej
                </span>
                .
              </p>
            </div>
          </div>
          <div className="text-white flex flex-col h-max my-auto px-3 lg:px-12  text-center relative w-full mt-12  lg:mx-auto lg:mt-24 border-l-4 border-r-4 border-green-600 py-3 lg:py-6 bg-white bg-opacity-25">
            <h1 className="text-5xl lg:text-7xl ">Cennik</h1>
            <p className="mt-6 text-base lg:text-2xl">
              Wynagrodzenie jest uzależnione m. in. od{" "}
              <span className="font-bold"> nakładu pracy</span> i{" "}
              <span className="font-bold">charakteru sprawy</span>.
            </p>
            <p className="mt-3 text-sm lg:text-2xl">
              W przypadku stałej obsługi wynagrodzenie w formie
              <span className="font-bold"> miesięcznego ryczałtu</span>.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className=" p-3 bg-green-600 hover:bg-green-500 duration-300 mt-12 w-max mx-auto  text-xl text-white font-bold"
            >
              Formularz kontaktowy
            </button>
          </div>
          <div
            className={`bg-gray-400 rounded-full flex-row space-x-2 text-sm justify-center mt-24 flex lg:hidden z-[1000]`}
          >
            <div>ul. Kościelna 15-17/7</div>
            <div>86-300 Grudziądz</div>
          </div>
        </div>
      </div>
      <div
        className={`w-[80vw] fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 lg:w-max h-max px-12 rounded-3xl py-6 duration-300 ${
          isContactOpen ? "z-[2000] opacity-100" : "z-[-1000] opacity-0"
        }`}
      >
        <h1 className="text-3xl text-center">Kontakt</h1>

        <div className="flex flex-col space-y-3 mt-6 lg:mt-12">
          <div className="flex flex-col lg:flex-row lg:space-x-3">
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
            <div className="flex flex-col mt-3 lg:mt-0">
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
    </div>
  );
}
