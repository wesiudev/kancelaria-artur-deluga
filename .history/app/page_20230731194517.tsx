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
      <div className={`w-screen h-full bg-gradient-to-b from-black to-white`}>
        <h1 className="w-max mx-auto">Zakres usług</h1>
      </div>
    </div>
  );
}
