"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-max w-max mx-auto lg:w-3/4 my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black ">
      <h1 className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl font-bold pr-6">
        Kancelaria Radcy Prawnego
      </h1>
      <div className="w-max mx-auto text-center lg:text-left lg:mx-0">
        <div className="h-px w-full bg-white my-3" />
        <h1 className="text-3xl sm:text-3xl lg:text-4xl">Artur Deluga</h1>
      </div>
    </div>
  );
}
