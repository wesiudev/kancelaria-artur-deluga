import Image from "next/image";
import paragraphImage from "@/app/assets/paragraph.png";
export default function OfferMobile() {
  return (
    <div className=" w-full mx-auto z-[2000] bg-gradient-to-r from-black via-zinc-800 to-black">
      <div className="flex flex-col space-x-[100px] min-h-screen items-center  py-24">
        <div className="flex flex-col w-[85vw] lg:w-[70vw] 2xl:w-[60vw] min-h-screen justify-center ">
          <Image
            src={paragraphImage}
            alt="Paragraf obrazek w tle"
            width={224}
            height={224}
            className="fixed opacity-10 -left-24 "
          />
          <Image
            src={paragraphImage}
            alt="Paragraf obrazek w tle"
            width={224}
            height={224}
            className="fixed opacity-10 -right-24 rotate-180"
          />
          <div className="flex flex-col justify-between w-max">
            <h1 className="w-max text-4xl md:text-5xl lg:text-7xl  font-bold">
              Oferowane usługi
            </h1>
            <div className="h-px w-full my-6 bg-white" />
          </div>
          <h2 className="text-left text-xl w-full lg:w-3/4 ">
            Nasza kancelaria oferuje{" "}
            <span className="font-bold"> kompleksową pomoc prawną</span>,
            dedykowaną <span className="font-bold">klientom indywidualnym</span>
            , <span className="font-bold">urzędom</span> oraz{" "}
            <span className="font-bold">podmiotom gospodarczym</span>.
            Specjalizujemy się w następującym zakresie dziedzin prawa:
          </h2>
          <div className="relative text-black flex flex-col space-y-12 mt-24">
            <div className="h-[25vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-l-2 md:border-t-2 border-black bg-white bg-opacity-75 flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo Karne</h1>
              <p className="text-xl mt-3 italic">
                Pomoc prawna na każdym etapie postępowania karnego między
                innymi:{" "}
                <span className="font-bold">
                  postępowanie przygotowawcze, obrona w postępowaniu sądowym,
                  reprezentacja pokrzywdzonego.
                </span>
              </p>
            </div>
            <div className="h-[25vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-l-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col justify-between p-6">
              <h1 className="text-3xl font-bold">Prawo gospodarcze</h1>
              <p className="text-xl mt-3 italic">
                Windykacja należności, sprawy o{" "}
                <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">
                  stała obsługa podmiotów gospodarczych
                </span>
              </p>
            </div>

            <div className="h-[25vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-t-2 md:border-r-2 border-black bg-white bg-opacity-75 flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo cywilne</h1>
              <p className="text-xl mt-3 italic">
                Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                <span className="font-bold">odszkodowanie</span> i{" "}
                <span className="font-bold">zadośćuczynienie</span>,{" "}
                <span className="font-bold">sprawy spadkowe</span>, sprawy z
                zakresu prawa rzeczowego
              </p>
            </div>
            <div className="h-[25vh] border-0 hover:scale-105 duration-300 hover:bg-opacity-100 cursor-default  md:border-r-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col p-6 justify-between">
              <h1 className="text-3xl font-bold">Prawo Rodzinne</h1>
              <p className="text-xl mt-3 italic">
                Sprawy o <span className="font-bold">rozwód</span>,{" "}
                <span className="font-bold">alimenty</span>,{" "}
                <span className="font-bold">kontakty z dzieckiem</span>,{" "}
                <span className="font-bold">
                  wykonywanie władzy rodzicielskiej
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
