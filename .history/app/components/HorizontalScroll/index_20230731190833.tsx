import Header from "./Header";

export default function HorizontalScroll() {
  return (
    <div className="flex flex-row w-full h-screen relative">
      <Header />
      <div className="bottom-[10vh] left-[12vw]">Dane kontaktowe</div>
    </div>
  );
}
