// Next.js
import { Metadata } from "next"
import { notFound } from "next/navigation"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"

// React components
import Image from "@/components/Image"
import FairyTaleHeader from "@/components/FairyTaleHeader"
import MoreFairyTales from "@/components/MoreFairyTales"

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

  const title = fairyTale?.title
    ? `${fairyTale?.title} | Pohádky mezi řádky`
    : "Pohádky mezi řádky"

  const description =
    fairyTale?.excerpt ||
    "Vstupte do světa kouzelných pohádek pro děti! Na pohadkymeziradky.cz naleznete pohádky na dobrou noc plné dobrodružství, fantazie a přátelství."

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url:
            fairyTale?.image.filePath.replace("../../public", "") ||
            "/images/pohadky-mezi-radky.webp",
        },
        {
          url: "/images/pohadky-mezi-radky.webp",
        },
      ],
      siteName: "Pohádky mezi řádky",
      locale: "cs_CZ",
      type: "website",
    },
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

  const fairyTaleTags = fairyTale.tags
    .map(tag => {
      return {
        label: TAGS.find(t => t.slug === tag.slug)?.label || "",
        slug: tag.slug,
      }
    })
    .filter(tag => tag.label && tag.slug)

  return (
    <>
      <article className="prose prose-lg prose-invert mx-auto mb-16 max-w-[1200px] lg:prose-xl lg:mb-20">
        <FairyTaleHeader
          title={fairyTale.title}
          color={fairyTale.color}
          timeToRead={fairyTale.timeToRead}
          tags={fairyTaleTags}
        />
        <div className="mx-auto max-w-[856px] px-6 lg:px-12">
          <MDXContent
            components={{
              Image: Image,
            }}
          />
        </div>
      </article>
      <MoreFairyTales tags={fairyTaleTags} id={fairyTale._id} />
    </>
  )
}
