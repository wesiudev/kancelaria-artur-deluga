"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Offer from "./components/Offer";

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);

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
  return (
    <div
      onWheel={handleScroll}
      className="absolute left-[0] top-0 w-screen h-screen z-[1500] overflow-hidden"
    >
      <div className={`relative w-full h-screen duration-1000 `}>
        <ThreeGraces />
        <Header />
        <div className="w-full h-screen ml-[20vw] relative overflow-x-hidden">
          <Offer scroll={currentScroll} />
        </div>
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
    </div>
  );
}
