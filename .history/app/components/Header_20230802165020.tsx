"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`h-max w-max mx-auto my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black ">
      <div className="flex flex-col items-center lg:items-start lg:mt-12 absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between  lg:left-[0%] lg:-translate-x-[0%] lg:top-[0%] lg:-translate-y-[0%] ${scrollY > 100 ? "fixed top-0 lg:w-full left-0" : "lg:w-3/4 lg:relative"}`}>
        <div className="flex flex-col h-max justify-center">
          <h1 className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl font-bold pr-6">
            Kancelaria Radcy Prawnego
          </h1>
          <div className="w-max mx-auto text-center lg:text-left lg:mx-0">
            <div className="h-px w-full bg-white my-3" />
            <h1 className="text-3xl sm:text-3xl lg:text-4xl">Artur Deluga</h1>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 mt-12 lg:mt-0">
          <Link
            href="#cennik"
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Cennik
          </Link>
          <Link
            href="#zakres-uslug"
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Zakres usług
          </Link>
          <Link
            href="#kontakt"
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
