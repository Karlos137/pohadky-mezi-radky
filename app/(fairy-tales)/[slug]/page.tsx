// Next.js
import { Metadata } from "next"
import { notFound } from "next/navigation"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"

// React components
import Image from "@/components/Image"
import FairyTaleHeader from "@/components/FairyTaleHeader"

// Constants
import { TAGS } from "@/utils/constants"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const fairyTale = allFairyTales.find(
    fairyTale => fairyTale.slug === params.slug
  )

  return {
    title: `${fairyTale?.title} | Pohádky mezi řádky` || "Pohádky mezi řádky",
    description: fairyTale?.excerpt || "Pohádky pro děti.",
  }
}

export async function generateStaticParams() {
  return allFairyTales.map(fairyTale => ({
    slug: fairyTale.slug,
  }))
}

export default async function FairyTalePage({
  params,
}: {
  params: { slug: string }
}) {
  const fairyTale = allFairyTales.find(
    fairyTale => fairyTale.slug === params.slug
  )

  if (!fairyTale) notFound()

  const MDXContent = getMDXComponent(fairyTale.body.code)

  return (
    <>
      <FairyTaleHeader
        title={fairyTale.title}
        color={fairyTale.color}
        timeToRead={fairyTale.timeToRead}
        tags={fairyTale.tags
          .map(tag => {
            return {
              label: TAGS.find(t => t.slug === tag.slug)?.label || "",
              slug: tag.slug,
            }
          })
          .filter(tag => tag.label && tag.slug)}
      />
      <div className="mx-auto max-w-[856px] px-6 lg:px-12">
        <MDXContent
          components={{
            Image: Image,
          }}
        />
      </div>
    </>
  )
}
