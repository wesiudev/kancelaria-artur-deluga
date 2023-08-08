"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen z-[1500] overflow-x-hidden">
      <div className="relative w-full h-screen">
        <ThreeGraces />
        <Header />

        <div
          className={`flex flex-row space-x-2 text-xs bottom-[10vh] left-[50%] -translate-x-[50%] justify-center w-full  absolute`}
        >
          <div>ul. Kościelna 15-17/7</div>
          <div>86-300 Grudziądz</div>
          <div className="flex flex-row items-center">
            {" "}
            <FaPhone />
            <a className="text-blue-300 ml-1" href="tel:+48502637727">
              502 637 727
            </a>
          </div>
        </div>
      </div>
      <div
        className={`w-screen h-full bg-gradient-to-b from-black to-zinc-800 select-none`}
      >
        <div id="zakres-uslug" className="w-4/5 lg:w-3/4 mx-auto">
          <div className="flex flex-col w-max mx-auto">
            <h1 className="w-max mx-auto text-4xl md:text-5xl lg:text-7xl pt-24 font-bold">
              Oferowane usługi
            </h1>
            <div className="h-px w-full my-6 bg-white" />
          </div>
          <h2 className="text-center text-xl w-full lg:w-3/4 mx-auto">
            Nasza kancelaria oferuje{" "}
            <span className="font-bold"> kompleksową pomoc prawną</span>,
            dedykowaną <span className="font-bold">klientom indywidualnym</span>
            , <span className="font-bold">urzędom</span> oraz{" "}
            <span className="font-bold">podmiotom gospodarczym</span>.
            Specjalizujemy się w następującym zakresie dziedzin prawa:
          </h2>
          <div className="grid grid-cols-1  gap-6 mt-12 text-black">
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-t-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
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
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-t-2 md:border-r-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
              <h1 className="text-3xl font-bold">Prawo cywilne</h1>
              <p className="text-xl mt-3 italic">
                Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">odszkodowanie</span> i{" "}
                <span className="font-bold">zadośćuczynienie</span>,{" "}
                <span className="font-bold">sprawy spadkowe</span>, sprawy z
                zakresu prawa rzeczowego
              </p>
            </div>
            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
              <h1 className="text-3xl font-bold">Prawo gospodarcze</h1>
              <p className="text-xl mt-3 italic">
                Windykacja należności, sprawy o{" "}
                <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">
                  stała obsługa podmiotów gospodarczych
                </span>
              </p>
            </div>

            <div className="border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-r-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
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
      </div>
    </div>
  );
}
