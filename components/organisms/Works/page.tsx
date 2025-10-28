type FontProps = {
  titleFont?: string,
  bodyFont?: string
}

export default function Works({ titleFont, bodyFont} : FontProps) {
  return (
    <main>
      <div>
        <h2 className={`text-3xl text-center ${titleFont}`}>Works</h2>
      </div>
    </main>
  )

}