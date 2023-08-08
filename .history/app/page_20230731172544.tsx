import Image from 'next/image'
import ThreeGraces from "./components/threegraces"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <ThreeGraces/>
    </main>
  )
}
