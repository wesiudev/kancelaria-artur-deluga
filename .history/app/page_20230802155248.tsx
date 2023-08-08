import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useState } from "react";
export default function Home() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen z-[1500] overflow-x-hidden">
      <div className="relative w-full h-screen">
        <ThreeGraces />
        <Header />

        <div
          className={`flex flex-row space-x-2 text-sm lg:flex-col bottom-[10vh]  lg:left-[12vw] absolute`}
        >
          <div>ul. Kościelna 15-17/7</div>
          <div>86-300 Grudziądz</div>
          <div>tel. 502 637 727</div>
        </div>
      </div>
      <div
        className={`w-screen h-full bg-gradient-to-b from-black to-zinc-800 select-none`}
      >
        <div className=" w-4/5 lg:w-3/4 mx-auto">
          <div className="flex flex-col w-max mx-auto">
            <h1 className="w-max mx-auto text-4xl md:text-5xl lg:text-7xl pt-24 font-bold">
              Oferowane usługi
            </h1>
            <div className="h-px w-full my-6 bg-white" />
          </div>
          <h2 className="text-center text-xl w-full lg:w-3/4 mx-auto">
            Nasza kancelaria oferuje kompleksową pomoc prawną, dedykowaną
            klientom indywidualnym, urzędom oraz podmiotom gospodarczym.
            Specjalizujemy się w następującym zakresie dziedzin prawa:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-black">
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-t-2 border-black bg-white bg-opacity-50 flex flex-col py-3">
              <h1 className="text-3xl">Prawo Karne</h1>
              <p className="text-xl mt-3">
                Pomoc prawna na każdym etapie postępowania karnego między
                innymi:{" "}
                <span className="font-bold">
                  postępowanie przygotowawcze, obrona w postępowaniu sądowym,
                  reprezentacja pokrzywdzonego.
                </span>
              </p>
            </div>
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-t-2 md:border-r-2 border-black bg-white bg-opacity-50 flex flex-col py-3">
              <h1 className="text-3xl">Prawo cywilne</h1>
              <p className="text-xl mt-3">
                Sprawy o zapłatę, odszkodowanie i zadośćuczynienie, sprawy
                spadkowe, sprawy z zakresu prawa rzeczowego
              </p>
            </div>
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-b-2 border-black bg-white bg-opacity-50 flex flex-col py-3">
              <h1 className="text-3xl">Prawo gospodarcze</h1>
              <p className="text-xl mt-3">
                Windykacja należnpści, sprawy o zapłatę, stała obsługa podmiotów
                gospodarczych
              </p>
            </div>

            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-r-2 md:border-b-2 border-black bg-white bg-opacity-50 flex flex-col py-3">
              <h1 className="text-3xl">Prawo Rodzinne</h1>
              <p className="text-xl mt-3">
                Sprawy o rozwód, alimenty, kontakty z dzieckiem, wykonywanie
                władzy rodzicielskiej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
