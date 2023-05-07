import { allFairyTales } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"
import Image from "../../../components/Image"

export async function generateStaticParams() {
  return allFairyTales.map(fairyTale => ({
    slug: fairyTale._raw.flattenedPath,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const fairyTale = allFairyTales.find(
    fairyTale => fairyTale._raw.flattenedPath === params.slug
  )

  // 404 if the post does not exist.
  if (!fairyTale) notFound()

  // Parse the MDX file via the useMDXComponent hook.
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
