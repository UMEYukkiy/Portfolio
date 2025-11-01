import { useState } from 'react'
import { Work } from '@/types/works'
import WorkList from './workList'
import WorkDetailModal from './workDetailModal'
import { works } from '@/data/worksData' 
import Box from '@/components/atmos/Box/index'

type FontProps = {
  titleFont?: string,
  bodyFont?: string
}

export default function Works({ titleFont, bodyFont} : FontProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  const handleSelect = (id: string) => {
    const work = works.find((w) => w.id === id) || null
    setSelectedWork(work)
  }

  const handleClose = () => {
    setSelectedWork(null)
  }

  return (
    <main>
      <div className="relative bg-white shadow-md text-black z-10 h-100 w-full pt-8 px-8">
        <div>
          <h2 className={`text-3xl text-center ${titleFont}`}>Works</h2>
        </div>
        <div className="flex gap-8 mt-8">
          <WorkList works={works} onSelect={handleSelect} />
          {selectedWork && (
            <WorkDetailModal work={selectedWork} onClose={handleClose} />
          )}
        </div>
      </div>
    </main>
  )
}