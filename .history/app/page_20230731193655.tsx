"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useState } from "react";
export default function Home() {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <div className="absolute left-0 top-0 w-screen h-screen z-[1500] overflow-x-hidden">
      <div className="relative w-full h-full">
        <ThreeGraces />
        <Header />
        <div
          className={`flex flex-col bottom-[10vh] left-[12vw] absolute duration-700 ${
            currentPage === 1
              ? "translate-x-[0vw] duration-700"
              : " duration-700 translate-x-[-30vw]"
          } `}
        >
          <div>ul. Kościelna 15-17/7</div>
          <div>86-300 Grudziądz</div>
          <div>tel. 502 637 727</div>
        </div>
      </div>
    </div>
  );
}
