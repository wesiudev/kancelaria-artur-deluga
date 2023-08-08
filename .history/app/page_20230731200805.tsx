"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useState } from "react";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="absolute left-0 top-0 w-screen h-screen z-[1500] overflow-x-hidden">
      <div className="relative w-full h-screen">
        <ThreeGraces />
        <Header />

        <div
          className={`flex flex-col bottom-[10vh] left-[12vw] absolute duration-700 ${
            currentPage === 1 ? "-translate-x-[0vw] " : "-translate-x-[30vw] "
          } `}
        >
          <div>ul. Kościelna 15-17/7</div>
          <div>86-300 Grudziądz</div>
          <div>tel. 502 637 727</div>
        </div>
      </div>
      <div
        className={`w-screen h-full bg-gradient-to-b from-black to-zinc-800 `}
      >
        <div className=" w-4/5 lg:w-3/4 mx-auto">
          <div className="flex flex-col w-max mx-auto">
            <h1 className="w-max mx-auto text-4xl md:text-5xl lg:text-7xl pt-24 font-bold">
              Oferowane usługi
            </h1>
            <div className="h-px w-full my-3 bg-white" />
          </div>
          <h2 className="text-center text-xl w-full lg:w-3/4 mx-auto">
            Nasza kancelaria oferuje kompleksową pomoc prawną, dedykowaną
            klientom indywidualnym, urzędom oraz podmiotom gospodarczym.
            Specjalizujemy się w następującym zakresie dziedzin prawa:
          </h2>
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="hover:scale-110 duration-300 px-3 border-l border-t border-white bg-black bg-opacity-50 flex flex-col py-3">
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
            <div className="hover:scale-110 duration-300 px-3 border-t border-r border-white bg-black bg-opacity-50 flex flex-col py-3">
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
            <div className="hover:scale-110 duration-300 px-3 border-l border-b border-white bg-black bg-opacity-50 flex flex-col py-3">
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
            <div className="hover:scale-110 duration-300 px-3 border-r border-b border-white bg-black bg-opacity-50 flex flex-col py-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
