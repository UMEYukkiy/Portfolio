import Box from '@/components/atmos/Box/index'

type FontProps = {
  titleFont?: string,
  bodyFont?: string
}

export default function Works({ titleFont, bodyFont} : FontProps) {
  return (
    <main>
      <div className="relative bg-white shadow-md text-black z-10 h-100 w-full pt-8 px-8">
        <div>
          <h2 className={`text-3xl text-center ${titleFont}`}>Works</h2>
        </div>
        <div className="flex gap-8 mt-8">
          <Box
            title="Demo1"
            content="デモ表示1"
            imageUrl="/images/study_image.jpg"
          />
          <Box
            title="Demo2"
            content="デモ表示2"
            imageUrl="/images/study_image.jpg"
          />
        </div>
      </div>
    </main>
  )
}