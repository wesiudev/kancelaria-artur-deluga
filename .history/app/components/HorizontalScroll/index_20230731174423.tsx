import Main from "./Main";

export default function HorizontalScroll() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-20 z-[1500]">
      <Main/>
    </div>
  );
}
