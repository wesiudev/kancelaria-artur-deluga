export default function Header() {
  return (
    <div className="h-max w-max md:w-max mx-auto md:ml-[12vw] my-auto md:my-0 text-white z-[1500] select-none py-6 px-3 md:bg-black shadow-md shadow-white">
      <div className="flex flex-row items-center w-full relative">
        <div className="flex flex-col h-max justify-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl  font-bold">
            Kancelaria Radcy Prawnego
          </h1>
          <div className="w-max mx-auto text-center md:text-left md:mx-0">
            <div className="h-px w-full bg-white my-3" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">Artur Deluga</h1>
          </div>
          <div className="flex-row hidden md:flex justify-between  w-full text-left mt-6">
            <button className="text-xl w-max">Cennik</button>
            <button className="text-xl w-max">Zakres usług</button>
            <button className="text-xl w-max">Kontakt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
