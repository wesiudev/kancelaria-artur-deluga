import Image from 'next/image'
import ThreeGraces from "./components/threegraces"
import HorizontalScroll from './components/HorizontalScroll'
export default function Home() {
  return (
    <main className="relative w-screen h-screen">
     <ThreeGraces />
     <HorizontalScroll />
    </main>
  )
}
