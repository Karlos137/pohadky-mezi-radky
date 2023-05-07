// Next.js
import { notFound } from "next/navigation"

// React components
import FairyTaleCards from "@/components/FairyTaleCards"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// Constants
import { TAGS } from "@/utils/constants"

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
  const tag = TAGS.find(tag => tag.slug === params.slug)

  if (!tag) notFound()

  return (
    <>
      <div className="mx-auto mb-16 max-w-[760px] text-center">
        <h1 className="mt-8">{tag.label}</h1>
      </div>
      <FairyTaleCards
        cards={allFairyTales
          .filter(fairyTale => {
            return fairyTale.tags.some(function (t) {
              return t.slug === tag.slug
            })
          })
          .map((fairyTale, i) => {
            const { id, title, url, timeToRead, excerpt, tags, image } =
              fairyTale
            return {
              id,
              title,
              url,
              timeToRead,
              excerpt,
              image,
              tags: tags
                .map(tag => {
                  return TAGS.find(t => t.slug === tag.slug)?.label || ""
                })
                .filter(tag => tag.length > 0),
            }
          })}
      />
    </>
  )
}
