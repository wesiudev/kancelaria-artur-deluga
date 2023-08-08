import Header from "./Header";


export default function HorizontalScroll() {
  return (
    <div className="flex flex-row max-w-screen h-screen">
      <Header/>
        <div className="min-w-screen h-screen bg-red-500"></div>
        <div className="min-w-screen h-screen bg-blue-500"></div>
        <div className="min-w-screen h-screen bg-red-500"></div>
    </div>
  );
}
