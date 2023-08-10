"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Header({
  marginLeft,
  setContactOpen,
}: {
  marginLeft: number;
  setContactOpen: Function;
}) {
  const { width } = useWindowDimensions();
  return (
    <div
      className={`${
        marginLeft > 150 && width > 1024 && "hidden"
      } h-max w-max mx-auto my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black`}
    >
      <div className="hidden lg:flex flex-col items-center absolute left-[50%]  top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between w-full  lg:fixed  lg:w-max">
        <div
          style={{
            transform: `translateX(${
              marginLeft > 25 ? -25 - 0.8 * marginLeft : "-50"
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
              className={`hidden lg:flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
            >
              <div>ul. Kościelna 15-17/7</div>
              <div>86-300 Grudziądz</div>
            </div>
            <div className="hidden lg:flex flex-row items-center text-center justify-center text-2xl lg:text-4xl my-4">
              <FaPhone className="text-green-400" />
              <a className=" ml-1 text-center" href="tel:+48502637727">
                502 637 727
              </a>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 lg:hidden">
          <Link
            href="/oferta"
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Zakres usług
          </Link>
          <button className="text-2xl lg:text-2xl w-max expand caps">
            Kontakt
          </button>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between w-full  lg:fixed  lg:w-max">
        <div className="flex flex-col h-max justify-center lg:ml-3 duration-500">
          <h1 className="text-4xl text-center sm:text-4xl lg:text-7xl font-bold ">
            Kancelaria Radcy <br className="block" /> Prawnego
          </h1>
          <div className="w-max mx-auto text-center ">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-3">
              Artur Deluga
            </h1>
            <div className="h-px w-full bg-white my-6" />
            <div
              className={`hidden lg:flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
            >
              <div>ul. Kościelna 15-17/7</div>
              <div>86-300 Grudziądz</div>
            </div>
            <div className="hidden lg:flex flex-row items-center text-center justify-center text-2xl lg:text-4xl my-4">
              <FaPhone />
              <a
                className="text-blue-400 ml-1 text-center"
                href="tel:+48502637727"
              >
                502637727
              </a>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 lg:hidden">
          <Link
            href="/oferta"
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Zakres usług
          </Link>
          <button
            onClick={() => setContactOpen(true)}
            className="text-2xl lg:text-2xl w-max expand caps"
          >
            Kontakt
          </button>
        </div>
      </div>
      <div className="absolute bottom-24 w-full left-[50%] -translate-x-[50%] lg:hidden flex flex-row items-center justify-center text-2xl lg:text-4xl my-4">
        <FaPhone />
        <a className="text-blue-400 ml-2 text-center" href="tel:+48502637727">
          502637727
        </a>
      </div>
      <div
        className={`absolute bottom-12 left-0 lg:hidden flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
      >
        <div>ul. Kościelna 15-17/7</div>
        <div>86-300 Grudziądz</div>
      </div>
    </div>
  );
}
