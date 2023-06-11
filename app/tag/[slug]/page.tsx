"use client"

// React
import { useState } from "react"

// Next.js
import { notFound } from "next/navigation"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// React components
import FairyTaleCards from "@/components/FairyTaleCards"

// Constants
import { TAGS, FAIRY_TALES_SHOWN } from "@/utils/constants"

// Dictionary
import dictionary from "@/utils/dictionary"

export async function generateStaticParams() {
  return TAGS.map(tag => ({
    slug: tag.slug,
  }))
}

export default async function TagPage({
  params,
}: {
  params: { slug: string }
}) {
  const [fairyTalesShown, setFairyTalesShown] = useState(FAIRY_TALES_SHOWN)

  const tag = TAGS.find(tag => tag.slug === params.slug)

  if (!tag) notFound()

  const filteredFairyTales = allFairyTales.filter(fairyTale => {
    return fairyTale.tags.some(function (t) {
      return t.slug === tag.slug
    })
  })

  return (
    <>
      <div className="mx-auto mb-16 max-w-[760px] px-6 text-center lg:px-12">
        <h1 className="mt-8">{tag.label}</h1>
      </div>
      <FairyTaleCards
        cards={filteredFairyTales.map((fairyTale, i) => {
          const { id, title, url, timeToRead, excerpt, tags, color } = fairyTale
          return {
            id,
            title,
            url,
            timeToRead,
            excerpt,
            color,
            tags: tags
              .map(tag => {
                return TAGS.find(t => t.slug === tag.slug)?.label || ""
              })
              .filter(tag => tag.length > 0),
          }
        })}
      />

      {fairyTalesShown < filteredFairyTales.length && (
        <div className="mb-12 flex justify-center px-6 lg:px-12">
          <button
            onClick={() => {
              const nextFairyTalesShown = fairyTalesShown + 3
              setFairyTalesShown(nextFairyTalesShown)
            }}
          >
            {dictionary.showMoreButton}
          </button>
        </div>
      )}
    </>
  )
}
