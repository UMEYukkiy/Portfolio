type FontProps = {
  titleFont?: string
  bodyFont?: string
}

export default function Study({ titleFont, bodyFont }: FontProps) {
  return (
    <main>  
      <div className="relative z-10 h-300 ml-200 pt-8 px-8 bg-zinc-300 text-black">
        <h2 className={`text-3xl text-center font-extrabold mt-2 ${titleFont}`}>My History</h2>
        <div className="border-l-4 border-gray-400 pl-8 mt-16">
          <div> 
            <div>
              <h3 className={`text-2xl font-bold mt-4 ${titleFont}`}>2006</h3>
              <p className={`ml-4 ${bodyFont}`}>I was born in Sendai.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2013</h3>
              <p className={`ml-4 ${bodyFont}`}>I started elementary school. I often used to hang out with my friends.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2016</h3>
              <p className={`ml-4 ${bodyFont}`}>I watched "Why!? Programming" in summer vacation and I was interested in programming. Then I exposed to Scratch for the first time.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2017</h3>
              <p className={`ml-4 ${bodyFont}`}>I knew there are game engines to create games. Then, I studied Unity but C# is difficult for me. So I gave up studying it. However I knew physics calculations and this experience made me excited about computer.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2019〜</h3>
              <p className={`ml-4 ${bodyFont}`}>I entered junior high school and I exposed to some programming languages, python, html, and so on.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2022〜</h3>
              <p className={`ml-4 ${bodyFont}`}>I built a computer by myself when I was in my first summer vacation in high school. And I studied Flutter and Dart.</p>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mt-16 ${titleFont}`}>2025〜</h3>
              <p className={`ml-4 ${bodyFont}`}>I passed an Aizu university entrance exam. I made 2 applications for iOS, which I knew how to build and release an app. After that I studied about computer security with Try hack me. Since summer vacation, I have studied web development using TypeScript and Next.js.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}