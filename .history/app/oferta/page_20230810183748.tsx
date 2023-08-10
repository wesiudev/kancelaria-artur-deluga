"use client";
import Image from "next/image";
import paragraphImage from "@/app/assets/paragraph.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
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
  const [isSending, setSending] = useState<boolean>(true);
  const [isSent, setIsSent] = useState<boolean>(false);
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  const onSubmit = async () => {
    setSending(true);
    setTimeout(() => {
      if (!isSent) {
        setIsSent(true);
      }
    }, 2000);
    setTimeout(() => {
      setContactOpen(false);
    }, 3000);
    try {
      await sendContactForm({
        firstName: firstName,
        email: email,
        message: message,
      });
    } catch (error) {}
  };
  return (
    <div className="w-full mx-auto z-[2000] bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-800 overflow-x-hidden text-black">
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
                <h1
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="w-max text-4xl md:text-5xl lg:text-7xl text-white caps font-bold"
                >
                  Oferowane usługi
                </h1>
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="h-1 w-full mb-6 bg-green-600"
                />
              </div>

              <h2
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-left text-xl w-full lg:w-3/4 "
              >
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
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  rounded-md bg-white  flex flex-col p-6 justify-between"
            >
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
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  rounded-md bg-white  flex flex-col justify-between p-6"
            >
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

            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default rounded-md bg-white  flex flex-col p-6 justify-between"
            >
              <h1 className="text-xl lg:text-3xl font-bold">Prawo cywilne</h1>
              <p className="text-sm sm:text-xl mt-3 italic">
                Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">odszkodowanie</span> i{" "}
                <span className="font-bold">zadośćuczynienie</span>,{" "}
                <span className="font-bold">sprawy spadkowe</span>, sprawy z
                zakresu prawa rzeczowego
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default rounded-md  bg-white  flex flex-col p-6 justify-between"
            >
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
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-white flex flex-col h-max my-auto px-3 lg:px-12  text-center relative w-full mt-12  lg:mx-auto lg:mt-24 border-l-4 border-r-4 border-green-600 py-3 lg:py-6 bg-gray-400 bg-opacity-25"
          >
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
              className=" p-3 bg-green-600 hover:bg-green-500 duration-300 mt-12 w-max mx-auto  text-xl text-white font-bold rounded-md"
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
          <Link
            href="/"
            className="group flex flex-row items-center mb-12 text-xl w-max text-white mx-auto duration-300 mt-24 hover:bg-gray-400 rounded-md p-3"
          >
            <FaArrowLeft className="mr-2 " />
            <span className="group-hover:underline group-hover:underline-offset-4">
              {" "}
              Strona główna
            </span>
          </Link>
        </div>
      </div>
      <div
        className={`text-white w-[80vw] fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 lg:w-max h-max px-12 rounded-3xl py-6 duration-300 ${
          isContactOpen ? "z-[2000] opacity-100" : "z-[-1000] opacity-0"
        } ${isSending ? "cursor-not-allowed" : "cursor-default"}`}
      >
        <div className="relative">
          <div
            className={`${
              isSending ? "z-[2001] opacity-100" : "z-[-1000] opacity-0"
            } absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] w-full h-full  px-12 py-6 flex justify-center items-center duration-300`}
          >
            {" "}
            {!isSent && (
              <svg
                aria-hidden="true"
                className="w-16 h-16  text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}
            {isSent && (
              <BsFillCheckCircleFill
                className={`text-green-500 w-20 h-20 duration-150 ${
                  !isSent ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              />
            )}
          </div>
          <h1 className="text-3xl text-center">Kontakt</h1>
          <div
            className={`${
              isSending ? "blur-sm" : "blur-none"
            } flex flex-col space-y-3 mt-6 lg:mt-12 relative`}
          >
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
              Treść wiadomości
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-full resize-none text-black mt-2"
              ></textarea>
            </div>
          </div>
          <div
            className={`${
              isSending ? "blur-sm" : "blur-none"
            } w-full flex space-x-3`}
          >
            <button
              onClick={() => setContactOpen(false)}
              className={`w-1/2 hover:underline py-2 mt-8`}
            >
              Powrót
            </button>
            <button
              disabled={isSending}
              onClick={onSubmit}
              className="w-1/2 bg-purple-400 hover:bg-purple-300 duration-300 py-2 mt-8"
            >
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
