"use client"

import { Work } from "@/types/works"
import Image from "next/image"
import { useEffect } from "react"

type Props = {
  work: Work
  onClose: () => void
}

export default function WorkDetailModal({ work, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-xl bg-white p-6 shadow-lg"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            x
          </button>
          <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
          <p className="text-gray-700 mb-4">{work.description}</p>

          <div className="flex flex-col gap-3 mb-4">
            {work.images.map((img: string, i: number) => (
              <div key={i} className="relative aspect-[4/3] w-full">
                <Image
                  src={img}
                  alt={`${work.title} ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="mb-2">
            <h3 className="font-semibold">Technologies</h3>
            <ul className="list-disc list-inside text-gray-600">
              {work.technologies.map((tech: string) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex gap-4">
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Demo
              </a>
            )}
            {work.linkGitHub && (
              <a
                href={work.linkGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
    </div>
  )
}