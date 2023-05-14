"use client"

// Next.js
import { useSearchParams } from "next/navigation"

// Constants
import { TAGS } from "@/utils/constants"

// React components
import FairyTaleCards from "@/components/FairyTaleCards/"

// Contentlayer
import { allFairyTales } from "@/.contentlayer/generated"

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
        <h1 className="mb-4 mt-8">Vyhledávání</h1>
        <p>
          Pro vyhledání pohádky napište do pole pro vyhledávání váš hledaný
          výraz.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto max-w-[780px] px-6 text-center xl:px-12">
        <h1 className="mb-4 mt-8">Výsledky vyhledávání pro:</h1>
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
          Pro zadaný výraz nebyla nalezena žádná pohádka.
        </p>
      )}
    </>
  )
}
export default SearchPage
