export default function Header() {
  return (
    <div className="h-max w-max md:w-max ml-[30vw] text-white z-[1500] select-none py-6 px-3">
      <div className="flex flex-row items-center justify-between w-full relative">
        <div className="flex flex-col h-[60vh] justify-center">
          <h1 className="text-2xl  sm:text-4xl lg:text-5xl">
            Kancelaria Radcy Prawnego
          </h1>
          <div className="w-max mx-auto text-center md:text-left md:mx-0">
            <div className="h-px w-full bg-white my-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Artur Deluga</h1>
          </div>
          <div className="flex-col hidden md:flex items-start w-max text-left mt-6">
            <button className="text-xl ">Cennik</button>
            <button className="text-xl mt-2">Zakres usług</button>
            <button className="text-xl mt-2">Kontakt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
