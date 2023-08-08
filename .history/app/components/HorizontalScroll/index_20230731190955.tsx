import Header from "./Header";

export default function HorizontalScroll() {
  return (
    <div className="flex flex-row w-full h-screen relative">
      <Header />
      <div className="flex flex-col bottom-[10vh] left-[12vw] absolute">
        <div>ul. Kościelna 15-17/7</div>
        <div>86-300 Grudziądz</div>
        <div>tel. 502 637 727</div>
      </div>
    </div>
  );
}
