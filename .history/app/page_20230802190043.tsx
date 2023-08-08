"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Offer from "./components/Offer";

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);

  const handleScroll = (event: any) => {
    const scrollAmount = event.deltaY;
    console.log(currentScroll);
    if (scrollAmount === 100) {
      setCurrentScroll(currentScroll + 15);
    }
    if (scrollAmount === -100 && currentScroll > 0) {
      setCurrentScroll(currentScroll - 15);
    }
  };
  return (
    <div
      onWheel={handleScroll}
      className="absolute left-[0] top-0 w-screen h-screen z-[1500] overflow-hidden"
    >
      <div className={`relative w-full h-full duration-1000 `}>
        <ThreeGraces />
        <Header marginLeft={currentScroll} />
        <div className=" ml-[12vw] relative overflow-x-hidden">
          <Offer scroll={currentScroll} />
        </div>
      </div>
    </div>
  );
}
