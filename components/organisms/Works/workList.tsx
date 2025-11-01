"use client"

import { Work } from "@/types/works"
import WorkItem from "./workItem"

type Props = {
  works: Work[]
  onSelect: (id: string) => void
}

export default function WorkList({ works, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {works.map((work) => (
        <WorkItem key={work.id} work={work} onSelect={onSelect} />
      ))}
    </div>
  )
}