import logo from "/favicon.png"
import Image from "next/image";

export default function Header() {
  return (
        <div className="h-max w-full text-white flex flex-col justify-center z-[1500] select-none">
            
            <div className="flex flex-row items-center">
              <Image alt="Kancelaria Radcy Prawnego Artur Deluga Logo" src={logo} width={124} height={124} />
              <h1 className="text-3xl ">Kancelaria Radcy Prawnego</h1>
            <h1 className="text-3xl">Artur Deluga</h1>
              </div>
        </div>
  );
}
