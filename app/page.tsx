import Profile from "@/components/organisms/Profile/page"
import Study from "@/components/organisms/Study/page"

export default function HomePage(){
  return (
    <main className="scroll-snap-y scroll-snap-mandatory h-screen overflow-y-scroll">
      <div className="h-100 justify-center items-center flex flex-col">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to Next.js!</h1>
      </div>
      <Profile />
      <Study />
    </main>
  )
}