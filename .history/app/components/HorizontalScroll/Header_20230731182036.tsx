import logo from "../../favicon.png"
import Image from "next/image";

export default function Header() {
  return (
        <div className="h-max w-full text-white z-[1500] select-none">
            
            <div className="flex flex-row items-center">
              <Image className="w-16 sm:w-32" alt="Kancelaria Radcy Prawnego Artur Deluga Logo" src={logo} width={124} height={124} />
              <div className="flex flex-col">
              <h1 className="text-xl ">Kancelaria Radcy Prawnego</h1>
              <h1 className="text-2xl">Artur Deluga</h1>
              </div>
              </div>
        </div>
  );
}
