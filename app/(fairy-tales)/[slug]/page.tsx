import { allFairyTales } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import Image from "../../../components/Image"

export async function generateStaticParams() {
  return allFairyTales.map(fairyTale => ({
    slug: fairyTale.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const fairyTale = allFairyTales.find(
    fairyTale => fairyTale.slug === params.slug
  )

  if (!fairyTale) notFound()

  console.log("FAIRY TALE URL", fairyTale.slug)
  console.log("FAIRY TALE FLATTENEDPATH", fairyTale._raw.flattenedPath)

  const MDXContent = getMDXComponent(fairyTale.body.code)

  return (
    <>
      <div>
        HEADER:
        <p>title:{fairyTale.title}</p>
      </div>
      <MDXContent
        components={{
          Image: Image,
        }}
      />
    </>
  )
}
