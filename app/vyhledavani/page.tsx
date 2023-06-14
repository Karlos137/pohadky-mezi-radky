// Next.js
import { useSearchParams } from "next/navigation"

// Contentlayer
import { allFairyTales } from "@/.contentlayer/generated"

// React components
import FairyTaleCards from "@/components/FairyTaleCards/"

// Constants
import { TAGS } from "@/utils/constants"

// Dictionary
import dictionary from "@/utils/dictionary"

export const metadata = {
  title: "Vyhledávání | Pohádky mezi řádky",
  description: "Pohádky pro děti.",
}

const SearchPage = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get("s")

  const filteredFairyTales = allFairyTales.filter(fairyTale => {
    if (!search) {
      return false
    } else {
      return (
        fairyTale.title.toLowerCase().includes(search.toLowerCase()) ||
        fairyTale.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        fairyTale.tags
          .map(tag => {
            return TAGS.find(t => t.slug === tag.slug)?.label || ""
          })
          .filter(tag => tag.length > 0)
          .some(t => {
            return t.toLocaleLowerCase().includes(search.toLowerCase())
          })
      )
    }
  })

  if (!search) {
    return (
      <div className="mx-auto max-w-[760px] px-6 text-center xl:px-12">
        <h1 className="mb-4 mt-8">{dictionary.pages.search.title}</h1>
        <p>{dictionary.pages.search.description}</p>
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto max-w-[780px] px-6 text-center xl:px-12">
        <h1 className="mb-4 mt-8">
          {dictionary.pages.search.searchResultsTitle}
        </h1>
        <h2 className="mb-8">{search}</h2>
      </div>
      {filteredFairyTales.length > 0 ? (
        <FairyTaleCards
          cards={filteredFairyTales.map((fairyTale, i) => {
            const { id, title, url, timeToRead, excerpt, tags, color } =
              fairyTale
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
      ) : (
        <p className="mx-auto max-w-[760px] px-6 text-center lg:px-12">
          {dictionary.pages.search.noResults}
        </p>
      )}
    </>
  )
}
export default SearchPage
