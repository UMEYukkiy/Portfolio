import Profile from "@/components/organisms/Profile/page"
import Study from "@/components/organisms/Study/page"
import Footer from "@/components/organisms/Footer/Footer"
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
  return (
    <main className={"scroll-snap-y scroll-snap-mandatory h-screen overflow-y-scroll"}>
      <div className="h-100 justify-center items-center flex flex-col">
        <h1 className={`text-4xl font-bold text-center mt-8 ${ComicRelief700.className}`}>Welcome to My Portfolio!</h1>
      </div>
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-[url('/images/study_image.jpg')] bg-cover bg-center bg-fixed"></div>
        <Profile titleFont={ComicRelief700.className} bodyFont={ComicRelief400.className} />
        <Study titleFont={ComicRelief700.className} bodyFont={ComicRelief400.className} /> 
      </section>
      <Footer />
    </main>
  )
}