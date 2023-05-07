// React components
import FairyTaleCards from "@/components/FairyTaleCards"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// Constants
import { TAGS } from "@/utils/constants"

const Home = () => {
  return (
    <>
      <div className="mx-auto mb-16 max-w-[760px] text-center">
        <h1 className="pb-4 pt-8">Všechny pohádky</h1>
        <p>
          Vítejte na webové stránce plné pohádek pro děti! Přinášíme Vám
          kouzelné příběhy, které budou vaše děti milovat. Naše kolekce zahrnuje
          moderní pohádky pro novou generaci, s neobyčejnými hrdiny a kouzelnými
          světy, které okouzlí i ty nejnáročnější čtenáře. Připojte se k nám a
          vychutnejte si kouzlo pohádek!
        </p>
      </div>

      <FairyTaleCards
        cards={allFairyTales.map((fairyTale, i) => {
          const { id, title, url, timeToRead, excerpt, tags, image } = fairyTale
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
export default Home
