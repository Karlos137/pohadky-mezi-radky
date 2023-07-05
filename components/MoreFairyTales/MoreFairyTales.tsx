// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// React components
import FairyTaleCards from "../FairyTaleCards"

// Constants
import { TAGS } from "@/utils/constants"

// Dictionary
import dictionary from "@/utils/dictionary"

type MoreFairyTalesProps = {
  tags: { slug: string; label: string }[]
  id: string | number
}

const MoreFairyTales = ({ tags, id }: MoreFairyTalesProps) => {
  const relatedFairyTales = allFairyTales
    .filter(fairyTale =>
      fairyTale.tags.some(fairyTale =>
        tags.some(tag => tag.slug === fairyTale.slug)
      )
    )
    .filter(fairyTale => fairyTale._id !== id)
    .sort(() => Math.random() - 0.5)

  return (
    <>
      <h2 className="mx-auto mb-8 max-w-[1300px] px-6 text-2xl font-extrabold uppercase lg:px-12 lg:text-4xl">
        {dictionary.moreFairyTales.title}
      </h2>
      <FairyTaleCards
        cards={relatedFairyTales.slice(0, 3).map((fairyTale, i) => {
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
export default MoreFairyTales
