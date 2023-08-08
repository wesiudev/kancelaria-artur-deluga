import logo from "../../favicon.png"
import Image from "next/image";

export default function Header() {
  return (
        <div className="h-max w-full text-white z-[1500] select-none">
            
            <div className="flex flex-row items-center">
              <Image alt="Kancelaria Radcy Prawnego Artur Deluga Logo" src={logo} width={124} height={124} />
              <div className="flex flex-col">
              <h1 className="text-2xl ">Kancelaria Radcy Prawnego</h1>
              <h1 className="text-2xl">Artur Deluga</h1>
              </div>
              </div>
        </div>
  );
}
