"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Header({ marginLeft }: { marginLeft: number }) {
  const { width } = useWindowDimensions();
  return (
    <div className="h-max w-max mx-auto my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black ">
      <div className="flex flex-col items-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between w-full lg:left-0 lg:fixed lg:-translate-x-[0%] lg:w-max">
        <div
          style={{
            transform: `translateX(${
              width > 1024 && marginLeft < 50 ? 25 - 0.8 * marginLeft : "0"
            }%)`,
          }}
          className=" flex flex-col h-max justify-center lg:ml-3 duration-500"
        >
          <h1 className="text-4xl text-center sm:text-4xl lg:text-7xl font-bold ">
            Kancelaria Radcy <br className="block" /> Prawnego
          </h1>
          <div className="w-max mx-auto text-center ">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-3">
              Artur Deluga
            </h1>
            <div className="h-px w-full bg-white my-6" />
            <div
              className={`absolute bottom-12 left-0 lg:relative flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
            >
              <div>ul. Kościelna 15-17/7</div>
              <div>86-300 Grudziądz</div>
            </div>
            <div className="flex flex-row items-center text-center justify-center text-2xl lg:text-4xl my-4">
              <FaPhone />
              <a
                className="text-blue-400 ml-1 text-center"
                href="tel:+48502637727"
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 mt-4 lg:mt-0 lg:hidden">
          <button className="text-2xl lg:text-2xl w-max expand caps">
            Cennik
          </button>
          <button className="text-2xl lg:text-2xl w-max expand caps">
            Zakres usług
          </button>
          <button className="text-2xl lg:text-2xl w-max expand caps">
            Kontakt
          </button>
        </div>
      </div>
      <div
        className={`absolute bottom-12 left-0 lg:relative flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
      >
        <div>ul. Kościelna 15-17/7</div>
        <div>86-300 Grudziądz</div>
      </div>
    </div>
  );
}
