// Next.js
import Link from "next/link"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// React components
import FairyTaleCards from "@/components/FairyTaleCards"
import Button from "@/components/Button/Button"

// Constants
import { TAGS } from "@/utils/constants"

// Dictionary
import dictionary from "@/utils/dictionary"

const HomePage = () => {
  const randomFairyTaleLink =
    allFairyTales[Math.floor(Math.random() * allFairyTales.length)].url

  return (
    <>
      <div className="mx-auto mb-16 max-w-[760px] px-6 text-center lg:px-12">
        <h1 className="mb-4 mt-8">{dictionary.pages.homepage.title}</h1>
        <p>{dictionary.pages.homepage.description}</p>
        <Link
          href={randomFairyTaleLink}
          className="mt-8 flex justify-center px-6 lg:px-12"
        >
          <Button>{dictionary.pages.homepage.randomFairyTaleButton}</Button>
        </Link>
      </div>

      <FairyTaleCards
        cards={allFairyTales.map((fairyTale, i) => {
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
    </>
  )
}
export default HomePage
