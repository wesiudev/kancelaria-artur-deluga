import Image from "next/image";
import ThreeGraces from "./components/threegraces";
import HorizontalScroll from "./components/HorizontalScroll";
export default function Home() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen z-[1500] overflow-x-hidden">
      <main className="relative w-full h-full">
        <ThreeGraces />
        <HorizontalScroll />
        <div className="h-screen w-full bg-white"></div>
      </main>
    </div>
  );
}
