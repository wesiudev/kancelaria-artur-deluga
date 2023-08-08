import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <div className="h-max w-full sm:w-3/4 mx-auto text-white z-[1500] select-none py-6 px-3">
      <div className="flex flex-row items-center w-full relative">
        <div className="flex flex-col">
          <h1 className="text-xl ">Kancelaria Radcy Prawnego</h1>
          <h1 className="text-2xl">Artur Deluga</h1>
        </div>
        <div className="absolute right-3 top-6 z-[1500]">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
