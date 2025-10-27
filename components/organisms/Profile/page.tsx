type FontProps = {
  titleFont?: string
  bodyFont?: string
}

export default function Profile({ titleFont, bodyFont} : FontProps){
  return (
    <main>
      <div className="bg-white shadow-md text-black relative z-10 h-140 ml-200 pt-8 px-8">
        <h2 className={`text-3xl text-center mt-8 pt-8 ${titleFont}`}>Profile</h2>
        <div className="h-70 w-200 pt-8 px-8">
          <h1 className={`text-3xl text-left font-semibold mt-2 ${bodyFont}`}>Ume Yukito</h1>
          <h2 className={`text-xl text-left mt-2 ${bodyFont}`}>Aizu University</h2>
          <p className={`text-base text-left mt-2 ${bodyFont}`}>
            I am a first-year student of Aizu University. I was interested in computers for the first time in late elementary school. I've been studying about programming and some computer systems since then. Currently, I am studying web development using TypeScript and Next.js.
            I was in track and field club in high school and I did javelin throw.
          </p>
        </div>
      </div>
    </main>
  )
}