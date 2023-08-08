"use client";
import ThreeGraces from "./components/threegraces";
import Header from "./components/Header";
import { useState } from "react";
import Offer from "./components/Offer";

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isContactOpen, setContactOpen] = useState(false);
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
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 min-h-[90vh] min-w-[90vw] rounded-3xl"></div>
      <div className="fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-gradient-to-bl from-black to-zinc-800 min-h-[80vh] min-w-[80vw] z-[2000] rounded-3xl p-12">
        <h1 className="text-6xl">Wypełnij potrzebne informacje.</h1>
        <label className="text-3xl mt-12" htmlFor="fName">
          {" "}
          Imię:
        </label>{" "}
        <br /> <input id="fName" type="text" />
        Email: <input type="text" />
        Treść: <textarea name="" id=""></textarea>
      </div>
      <div className={`relative w-full h-full duration-1000 `}>
        <ThreeGraces />
        <Header marginLeft={currentScroll} />
        <div className=" ml-[12vw] relative overflow-x-hidden">
          <Offer scroll={currentScroll} setContactOpen={setContactOpen} />
        </div>
      </div>
    </div>
  );
}
