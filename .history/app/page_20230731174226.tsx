import Image from 'next/image'
import ThreeGraces from "./components/threegraces"
import HorizontalScroll from './components/HorizontalScroll'
export default function Home() {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen">
    <main className="relative w-full h-full">
     <ThreeGraces />
     <HorizontalScroll />
    </main>
    </div>
  )
}
