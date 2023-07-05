// Next.js
import { Metadata } from "next"
import { notFound } from "next/navigation"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// React components
import FairyTaleCards from "@/components/FairyTaleCards"

// Constants
import { TAGS } from "@/utils/constants"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const tag = TAGS.find(tag => tag.slug === params.slug)

  const title = tag?.label
    ? `${tag?.label} | Pohádky mezi řádky`
    : "Pohádky mezi řádky"

  const description = tag?.label
    ? `Pohádky pro děti v kategorii ${tag?.label}.`
    : "Kategorie pohádek pro děti"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/images/pohadky-mezi-radky.webp",
      siteName: "Pohádky mezi řádky",
      locale: "cs_CZ",
      type: "website",
    },
  }
}

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
          const { id, title, url, timeToRead, excerpt, image, tags, color } =
            fairyTale
          return {
            id,
            title,
            url,
            timeToRead,
            excerpt,
            image: image.filePath.replace("../../public", ""),
            imageBlur: image.blurhashDataUrl,
            color,
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
