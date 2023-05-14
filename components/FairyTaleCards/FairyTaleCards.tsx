// React components
import FairyTaleCard from "../FairyTaleCard"

type FairyTaleCardsProps = {
  cards: {
    id: string | number
    title: string
    url: string
    timeToRead: string
    excerpt: string
    tags: string[]
    color: string
  }[]
}

const FairyTaleCards = ({ cards }: FairyTaleCardsProps) => {
  return (
    <div className="mx-auto mb-12 grid max-w-[1300px] grid-cols-1 gap-x-7 gap-y-16 px-6 md:grid-cols-2 lg:mb-16 lg:px-12 xl:grid-cols-3">
      {cards.map(card => {
        const { id, title, url, timeToRead, excerpt, tags, color } = card
        return (
          <FairyTaleCard
            key={id}
            title={title}
            url={url}
            timeToRead={timeToRead}
            excerpt={excerpt}
            tags={tags}
            color={color}
          />
        )
      })}
    </div>
  )
}
export default FairyTaleCards
