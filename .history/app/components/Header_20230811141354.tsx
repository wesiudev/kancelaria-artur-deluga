"use client";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import logo from "@/public/logo.png";
import Image from "next/image";
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
      } h-max w-max mx-auto my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 `}
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
          <div className="w-max mx-auto text-center ">
            <Image
              width={666}
              height={666}
              alt="Kancelaria Radcy Prawnego Artur Deluga Zdjęcie"
              className="w-full"
              src={logo}
            />

            <div className="w-max flex flex-col mx-auto">
              <div className="h-px w-full bg-white my-6" />
              <Link
                href="https://www.google.pl/maps/place/Ko%C5%9Bcielna+15%2F17,+86-300+Grudzi%C4%85dz/@53.4936317,18.7491282,21z/data=!4m6!3m5!1s0x4702cfe9d55ebce9:0x9f5b2defb2cf16f8!8m2!3d53.4936379!4d18.7492069!16s%2Fg%2F11nnscf_vb?entry=ttu"
                target="_blank"
                className={`hidden lg:flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
              >
                <div>ul. Kościelna 15-17/7</div>
                <div>86-300 Grudziądz</div>
              </Link>
            </div>

            <div className="hidden lg:flex flex-row items-center text-center justify-center text-2xl lg:text-4xl my-6">
              <FaPhone className="" />
              <a
                className=" ml-1 text-center text-green-400"
                href="tel:+48502637727"
              >
                +48502637727
              </a>
            </div>
            <div className="flex-row justify-center space-y-12 lg:items-end flex text-left space-x-5 lg:space-x-8">
              <Link
                href="/oferta"
                className="text-2xl lg:text-2xl w-max expand "
              >
                Zakres usług
              </Link>
              <button
                onClick={() => setContactOpen(true)}
                className="text-2xl lg:text-2xl w-max expand "
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 lg:hidden">
          <Link href="/oferta" className="text-2xl lg:text-2xl w-max expand ">
            Zakres usług
          </Link>
          <button
            onClick={() => setContactOpen(true)}
            className="text-2xl lg:text-2xl w-max expand "
          >
            Kontakt
          </button>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:flex-row  lg:justify-between w-full  lg:fixed  lg:w-max">
        <div className="flex flex-col h-max justify-center lg:ml-3 duration-500">
          <div className="w-max mx-auto text-center ">
            <Image
              width={666}
              height={666}
              alt="Kancelaria Radcy Prawnego Artur Deluga Zdjęcie"
              src={logo}
              className="w-1/2 lg:w-full"
            />
            <div className="h-px w-full bg-white my-6" />
            <Link
              href="https://www.google.pl/maps/place/Ko%C5%9Bcielna+15%2F17,+86-300+Grudzi%C4%85dz/@53.4936317,18.7491282,21z/data=!4m6!3m5!1s0x4702cfe9d55ebce9:0x9f5b2defb2cf16f8!8m2!3d53.4936379!4d18.7492069!16s%2Fg%2F11nnscf_vb?entry=ttu"
              target="_blank"
              className={`hidden lg:flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
            >
              <div>ul. Kościelna 15-17/7</div>
              <div>86-300 Grudziądz</div>
            </Link>
            <div className="hidden lg:flex flex-row items-center text-center justify-center text-2xl lg:text-4xl my-4">
              <FaPhone />
              <a
                className="text-green-400 ml-1 text-center"
                href="tel:+48502637727"
              >
                +48502637727
              </a>
            </div>
          </div>
        </div>
        <div className="flex-row justify-center lg:justify-end lg:items-end flex text-left space-x-5 lg:space-x-8 lg:hidden">
          <Link href="/oferta" className="text-2xl lg:text-2xl w-max expand ">
            Zakres usług
          </Link>
          <button
            onClick={() => setContactOpen(true)}
            className="text-2xl lg:text-2xl w-max expand "
          >
            Kontakt
          </button>
        </div>
      </div>
      <div className="absolute bottom-24 w-full left-[50%] -translate-x-[50%] lg:hidden flex flex-row items-center justify-center text-2xl lg:text-4xl my-4">
        <FaPhone />
        <a className="text-green-400 ml-2 text-center" href="tel:+48502637727">
          +48502637727
        </a>
      </div>
      <Link
        href="https://www.google.pl/maps/place/Ko%C5%9Bcielna+15%2F17,+86-300+Grudzi%C4%85dz/@53.4936317,18.7491282,21z/data=!4m6!3m5!1s0x4702cfe9d55ebce9:0x9f5b2defb2cf16f8!8m2!3d53.4936379!4d18.7492069!16s%2Fg%2F11nnscf_vb?entry=ttu"
        target="_blank"
        className={`absolute bottom-12 left-0 lg:hidden flex flex-row space-x-2 text-sm lg:text-xl justify-center w-full`}
      >
        <div>ul. Kościelna 15-17/7</div>
        <div>86-300 Grudziądz</div>
      </Link>
    </div>
  );
}
