import { useState, useEffect } from 'react'

type charactersProps ={
  text: string,
  duration: number,
  shuffleInterval: number
}

export const useTextShuffle = ( {text, duration, shuffleInterval} : charactersProps ) => {
  const [displayText, setDisplayText] = useState("")
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"
  
  useEffect(() => {
    let start: number | null = null
    let rafId: number
    let lastShuffleTime = 0

    const update = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start //経過時間(ミリ秒)
      const progress = Math.min(elapsed / duration, 1) //進行度(0.0~1.0)
      const revealedLength = Math.floor(text.length * progress) //確定している文字数

      if (timestamp - lastShuffleTime >= shuffleInterval) { //一定間隔での更新
        const newText = text //表示文字の生成
          .split("")
          .map((char, i) => {
            if (i < revealedLength) return char
            if (char === " ") return " "
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join("")

        setDisplayText(newText)
        lastShuffleTime = timestamp
      }

      if (progress < 1) { //進行中かどうかのチェック
        rafId = requestAnimationFrame(update)
      } else {
        setDisplayText(text)
      }
    }

    rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [ characters, text, duration, shuffleInterval ])

  return displayText
}