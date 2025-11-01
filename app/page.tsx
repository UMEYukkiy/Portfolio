"use client"

import Profile from "@/components/organisms/Profile/page"
import Study from "@/components/organisms/Study/page"
import Works from "@/components/organisms/Works/page"
import Footer from "@/components/organisms/Footer/Footer"
import AnimatedImage from "@/components/organisms/Animater/AnimatedImage"
import { useTextShuffle } from "@/hooks/useTextShuffle"
import { Comic_Relief } from 'next/font/google'

const ComicRelief400 = Comic_Relief({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-comic-relief400',
})

const ComicRelief700 = Comic_Relief({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-comic-relief700',
})

export default function HomePage(){
  const text = useTextShuffle({ text:"Welcome to My Portfolio!", duration:1400, shuffleInterval:50 });
  
  return (
    <main className={"scroll-snap-y scroll-snap-mandatory h-screen overflow-y-scroll"}>
      <div className="h-100 justify-center items-center flex flex-col">
        <h1 className={`text-4xl font-bold text-center mt-8 ${ComicRelief700.className}`}>{text}</h1>
      </div>
      <section className="relative min-h-screen flex flex-col">
        <AnimatedImage />
        <div className="ml-auto right-0 top-0 h-full w-2/3 flex-col item-center">
          <Profile titleFont={ComicRelief700.className} bodyFont={ComicRelief400.className}/>
          <Study titleFont={ComicRelief700.className} bodyFont={ComicRelief400.className} />
        </div>
        <div>
          <Works titleFont={ComicRelief700.className} bodyFont={ComicRelief400.className} />
        </div>
      </section>
      <Footer />
    </main>
  )
}