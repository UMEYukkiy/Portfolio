"use client"

import { Work } from "@/types/works"
import Image from "next/image"

type Props = {
  work: Work
  onSelect: (id: string) => void
}

export default function WorkItem({ work, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(work.id)}
      className="cursor-pointer transition-transform hover:scale-105"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md">
        <Image
          src={work.images[0]}
          alt={work.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold text-center">{work.title}</h3>
    </div>
  )
}