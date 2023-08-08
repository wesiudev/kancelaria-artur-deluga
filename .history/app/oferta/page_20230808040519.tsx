import Image from "next/image";
import paragraphImage from "@/app/assets/paragraph.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
export default function OfferMobile() {
  return (
    <div className="w-full mx-auto z-[2000] bg-gradient-to-r from-black via-zinc-800 to-black">
      <div className="flex flex-col space-x-[100px] min-h-screen items-center py-24">
        <div className="flex flex-col w-[85vw] lg:w-[70vw] 2xl:w-[60vw] min-h-screen justify-center ">
          <Image
            src={paragraphImage}
            alt="Paragraf obrazek w tle"
            width={224}
            height={224}
            className="fixed opacity-10 -left-24 "
          />
          <Image
            src={paragraphImage}
            alt="Paragraf obrazek w tle"
            width={224}
            height={224}
            className="fixed opacity-10 -right-24 rotate-180"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-row justify-between">
              <div className="w-1/2">
                <h1 className="mb-12">
                  {" / "}
                  <Link
                    className="hover:underline hover:underline-offset-4"
                    href="/"
                  >
                    home
                  </Link>
                  {" / "}
                  <Link
                    className="hover:underline hover:underline-offset-4"
                    href="/oferta"
                  >
                    oferta
                  </Link>
                </h1>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl text-right sm:text-left">
                  Kancelaria Radcy Prawnego
                </h1>
                <div className="w-full flex justify-end">
                  <h2 className="text-xl">Artur Deluga</h2>
                </div>
                <div
                  className={` flex-row space-x-2 text-sm justify-end mt-3 mb-12 hidden lg:flex`}
                >
                  <div>ul. Kościelna 15-17/7</div>
                  <div>86-300 Grudziądz</div>
                </div>
              </div>
            </div>
            <Link
              className="group flex flex-row items-center mb-12 text-xl w-max"
              href="/"
            >
              <FaArrowLeft className="mr-2" />
              <span className="hover:underline hover:underline-offset-4">
                {" "}
                Powrót
              </span>
            </Link>
            <div className="w-max">
              <h1 className="w-max text-4xl md:text-5xl lg:text-7xl  font-bold">
                Oferowane usługi
              </h1>
              <div className="h-px w-full my-6 bg-white" />
            </div>
          </div>
          <h2 className="text-left text-xl w-full lg:w-3/4 ">
            Nasza kancelaria oferuje{" "}
            <span className="font-bold"> kompleksową pomoc prawną</span>,
            dedykowaną <span className="font-bold">klientom indywidualnym</span>
            , <span className="font-bold">urzędom</span> oraz{" "}
            <span className="font-bold">podmiotom gospodarczym</span>.
            Specjalizujemy się w następującym zakresie dziedzin prawa:
          </h2>
          <div className="relative text-black flex flex-col space-y-12 mt-24">
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-l-2 md:border-t-2 border-black bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo Karne</h1>
              <p className="text-xl mt-3 italic">
                Pomoc prawna na każdym etapie postępowania karnego między
                innymi:{" "}
                <span className="font-bold">
                  postępowanie przygotowawcze, obrona w postępowaniu sądowym,
                  reprezentacja pokrzywdzonego.
                </span>
              </p>
            </div>
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-l-2 md:border-b-2 border-black bg-white  flex flex-col justify-between p-6">
              <h1 className="text-3xl font-bold">Prawo gospodarcze</h1>
              <p className="text-xl mt-3 italic">
                Windykacja należności, sprawy o{" "}
                <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">
                  stała obsługa podmiotów gospodarczych
                </span>
              </p>
            </div>

            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-t-2 md:border-r-2 border-black bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo cywilne</h1>
              <p className="text-xl mt-3 italic">
                Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">odszkodowanie</span> i{" "}
                <span className="font-bold">zadośćuczynienie</span>,{" "}
                <span className="font-bold">sprawy spadkowe</span>, sprawy z
                zakresu prawa rzeczowego
              </p>
            </div>
            <div className="max-h-[50vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-r-2 md:border-b-2 border-black bg-white  flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo Rodzinne</h1>
              <p className="text-xl mt-3 italic">
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
        </div>
        <div className="mt-12 w-full">
          <button className="bg-purple-400 hover:bg-purple-300 p-3 mx-auto">
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}
