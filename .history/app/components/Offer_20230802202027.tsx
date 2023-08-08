import paragraphImage from "@/app/assets/paragraph.png";
import Image from "next/image";
export default function Offer({ scroll }: { scroll: number }) {
  return (
    <div
      style={{
        transform: `translateX(${scroll > 0 ? 100 - scroll : "75"}${
          scroll > 0 ? "vh" : "%"
        })`,
      }}
      className={`lg:min-w-[200vw] 2xl:min-w-[150vw]  h-screen bg-gradient-to-b from-black via-zinc-800 to-black select-none pb-24 duration-500  fixed top-0 pr-[12vw]`}
    >
      <div className="w-full mx-auto">
        <div className="flex flex-row space-x-[100px]">
          <div className="flex flex-col w-[90vw] lg:w-[70vw] 2xl:w-[60vw] h-screen justify-center  pl-[12vw]">
            <Image
              src={paragraphImage}
              alt="Paragraf obrazek w tle"
              width={312}
              height={312}
              className="absolute opacity-10"
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
              dedykowaną{" "}
              <span className="font-bold">klientom indywidualnym</span>,{" "}
              <span className="font-bold">urzędom</span> oraz{" "}
              <span className="font-bold">podmiotom gospodarczym</span>.
              Specjalizujemy się w następującym zakresie dziedzin prawa:
            </h2>
          </div>
          <div className="relative text-black flex flex-row space-x-12">
            <div className="flex flex-col justify-center space-y-6 w-[60vw]">
              <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-t-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
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
              <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-t-2 md:border-r-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                <h1 className="text-3xl font-bold">Prawo cywilne</h1>
                <p className="text-xl mt-3 italic">
                  Sprawy o <span className="font-bold">zapłatę</span>,{" "}
                  <span className="font-bold">odszkodowanie</span> i{" "}
                  <span className="font-bold">zadośćuczynienie</span>,{" "}
                  <span className="font-bold">sprawy spadkowe</span>, sprawy z
                  zakresu prawa rzeczowego
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6 w-[60vw]">
              <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-l-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
                <h1 className="text-3xl font-bold">Prawo gospodarcze</h1>
                <p className="text-xl mt-3 italic">
                  Windykacja należności, sprawy o{" "}
                  <span className="font-bold">zapłatę</span>,{" "}
                  <span className="font-bold">
                    stała obsługa podmiotów gospodarczych
                  </span>
                </p>
              </div>

              <div className="h-[25vh] border-0 hover:scale-110 duration-300 hover:bg-opacity-100 cursor-default px-3 md:border-r-2 md:border-b-2 border-black bg-white bg-opacity-75 flex flex-col py-3">
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
          <div className="flex h-full my-auto">
            <div className="flex flex-col h-max">
              <h1>Cennik</h1>
              <p>
                Wynagrodzenie jest uzależnione m. in. od nakładu pracy i
                charakteru sprawy.
              </p>
              <p>
                W przypadku stałej obsługi wynagrodzenie w formie miesięcznego
                ryczałtu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
