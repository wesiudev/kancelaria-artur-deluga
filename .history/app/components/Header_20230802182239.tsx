"use client";
import Link from "next/link";

export default function Header({ marginLeft }: { marginLeft: number }) {
  return (
    <div className="h-max w-max mx-auto my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black ">
      <div className="flex flex-col items-center  absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between w-full lg:left-0 lg:fixed lg:-translate-x-[0%] lg:top-[50%] lg:-translate-y-[50%]">
        <div
          style={{ transform: `translateX(${50 - 0.8 * marginLeft}%)` }}
          className="flex flex-col h-max justify-center ml-3 duration-500"
        >
          <h1 className="text-3xl text-center sm:text-4xl lg:text-7xl font-bold ">
            Kancelaria Radcy <br className="hidden lg:block" /> Prawnego
          </h1>
          <div className="w-max mx-auto text-center ">
            <div className="h-px w-full bg-white my-3" />
            <h1 className="text-3xl sm:text-3xl lg:text-4xl">Artur Deluga</h1>
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
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 mt-12 lg:mt-0 lg:hidden">
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
