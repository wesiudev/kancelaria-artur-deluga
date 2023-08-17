"use client";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import bg from "@/public/bg.png";
import paragraphImage from "@/app/assets/paragraph.png";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useIsVisible } from "react-is-visible";
import "intersection-observer";
import { useRef } from "react";

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
  const [isContactOpen, setContactOpen] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);
  const handleScroll = (event: any) => {
    console.log(isVisible);
    const scrollAmount = event.deltaY;
    if (scrollAmount === 100 && !isVisible) {
      setCurrentScroll(currentScroll + 25);
    }
    if (scrollAmount === -100 && currentScroll > 0) {
      setCurrentScroll(currentScroll - 25);
    }
  };
  useEffect(() => {}, [isVisible]);
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSending, setSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      await sendContactForm({
        firstName: firstName,
        email: email,
        message: message,
      });
    } catch (error) {}
  };
  const submitAnimation = () => {
    setSending(true);
    setTimeout(() => {
      if (!isSent) {
        setIsSent(true);
      }
    }, 2000);
    setTimeout(() => {
      setContactOpen(false);
    }, 3000);
  };
  return (
    <div
      onWheel={handleScroll}
      className="absolute left-[0] top-0 w-screen h-screen z-[1500] overflow-hidden text-white bg-white"
    >
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-black h-[101vh] w-[101vw] rounded-3xl">
        {currentScroll < 200 ? (
          <Image
            width={1248}
            height={1248}
            src={bg}
            alt="Obraz w tle Radca Prawny Artur Deluga. Image by FreePik."
            className="w-full h-full blur-sm"
          />
        ) : (
          <div
            className={`${
              currentScroll < 200 ? "opacity-0" : "opacity-100"
            } h-screen bg-gradient-to-b from-black via-zinc-800 to-black w-screen duration-1000`}
          ></div>
        )}
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
              <div
                onClick={() => setContactOpen(false)}
                className="flex flex-col gap-6 justify-center items-center"
              >
                <BsFillCheckCircleFill
                  className={`text-green-500 w-20 h-20 duration-150 cursor-pointer ${
                    isSent ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                />
                <span className="text-white bg-green-500 rounded-md p-2 cursor-pointer">
                  Wiadomość wysłana pomyślnie
                </span>
              </div>
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
              onClick={() => {
                onSubmit(), submitAnimation();
              }}
              className="w-1/2 bg-purple-400 hover:bg-purple-300 duration-300 py-2 mt-8"
            >
              Wyślij
            </button>
          </div>
        </div>
      </div>
      <div className={`relative w-full h-full duration-1000 overflow-hidden`}>
        <Header marginLeft={currentScroll} setContactOpen={setContactOpen} />
        <div className=" ml-[12vw] relative overflow-x-hidden">
          <div
            style={{
              transform: `translateX(${
                currentScroll > 0 ? 100 - currentScroll : "75"
              }${currentScroll > 0 ? "vh" : "%"})`,
            }}
            className={`hidden lg:block lg:min-w-[200vw] 2xl:min-w-[150vw]  h-screen bg-gradient-to-b from-black via-zinc-800 to-black select-none pb-24 duration-500  fixed top-0 pr-[12vw]`}
          >
            <div className="w-full mx-auto">
              <div className="flex flex-row space-x-[100px]">
                <div className="flex flex-col w-[90vw] lg:w-[70vw] 2xl:w-[60vw] h-screen justify-center  pl-[12vw]">
                  <Image
                    src={paragraphImage}
                    alt="Paragraf obrazek w tle"
                    width={666}
                    height={666}
                    className="absolute opacity-10 w-[30vw]"
                  />
                  <div className="flex flex-col justify-between w-max">
                    <h1 className="w-max text-4xl md:text-5xl lg:text-7xl  font-bold">
                      Oferowane usługi
                    </h1>
                    <div className="h-px w-full my-6 bg-white" />
                  </div>
                  <h2 className="text-left text-xl w-full lg:w-3/4 ">
                    Nasza kancelaria oferuje kompleksową pomoc prawną ,
                    dedykowaną klientom indywidualnym, urzędom oraz podmiotom
                    gospodarczym. Specjalizujemy się przede wszystkim:
                  </h2>
                </div>
                <div className="relative text-black flex flex-row space-x-12 mr-24">
                  <div className="flex flex-col justify-center space-y-6 w-[60vw]">
                    <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-t-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                      <h1 className="text-3xl font-bold">Prawo Karne</h1>
                      <p className="text-xl mt-3 italic">
                        Pomoc prawna na każdym etapie postępowania karnego
                        między innymi: postępowanie przygotowawcze, obrona w
                        postępowaniu sądowym, reprezentacja pokrzywdzonego.
                      </p>
                    </div>
                    <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                      <h1 className="text-3xl font-bold">Prawo gospodarcze</h1>
                      <p className="text-xl mt-3 italic">
                        Windykacja należności, sprawy o zapłatę, stała obsługa
                        podmiotów gospodarczych
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center space-y-6 w-[60vw]">
                    <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-t-2 md:border-r-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                      <h1 className="text-3xl font-bold">Prawo cywilne</h1>
                      <p className="text-xl mt-3 italic">
                        Sprawy o zapłatę, odszkodowanie i zadośćuczynienie,{" "}
                        sprawy spadkowe, sprawy z zakresu prawa rzeczowego
                      </p>
                    </div>
                    <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-r-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                      <h1 className="text-3xl font-bold">Prawo Rodzinne</h1>
                      <p className="text-xl mt-3 italic">
                        Sprawy o rozwód, alimenty, kontakty z dzieckiem,{" "}
                        wykonywanie władzy rodzicielskiej .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-max my-auto px-12 border-l border-r border-white  text-center relative w-[60vw]">
                  <div
                    ref={nodeRef}
                    className="-right-6 absolute top-[50%] -translate-y-[50%] h-12 w-12 z-[2001]"
                  ></div>
                  <h1 className="text-7xl ">Cennik</h1>
                  <p className="mt-6 text-2xl">
                    Wynagrodzenie jest uzależnione m. in. od nakładu pracy i{" "}
                    charakteru sprawy.
                  </p>
                  <p className="mt-3 text-2xl">
                    W przypadku stałej obsługi wynagrodzenie w formie
                    miesięcznego ryczałtu.
                  </p>
                  <button
                    onClick={() => setContactOpen(true)}
                    className=" p-3 bg-purple-400 hover:bg-purple-300 duration-300 text-black mt-12 w-max mx-auto"
                  >
                    Wypełnij formularz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
