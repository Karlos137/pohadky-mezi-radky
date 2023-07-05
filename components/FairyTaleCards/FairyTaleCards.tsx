"use client"

// React
import { useState } from "react"

// React components
import FairyTaleCard from "../FairyTaleCard"
import Button from "../Button"

// Constants
import { FAIRY_TALES_SHOWN } from "@/utils/constants"

// Dictionary
import dictionary from "@/utils/dictionary"

type FairyTaleCardsProps = {
  cards: {
    id: string | number
    title: string
    url: string
    timeToRead: string
    excerpt: string
    image: string
    imageBlur: string
    tags: string[]
    color: string
  }[]
}

const FairyTaleCards = ({ cards }: FairyTaleCardsProps) => {
  const [fairyTalesShown, setFairyTalesShown] = useState(FAIRY_TALES_SHOWN)

  return (
    <>
      <div className="mx-auto mb-16 grid max-w-[1300px] grid-cols-1 gap-x-7 gap-y-16 px-6 md:grid-cols-2 lg:mb-24 lg:px-12 xl:grid-cols-3">
        {cards.slice(0, fairyTalesShown).map(card => {
          const {
            id,
            title,
            url,
            timeToRead,
            excerpt,
            image,
            imageBlur,
            tags,
            color,
          } = card
          return (
            <FairyTaleCard
              key={id}
              title={title}
              url={url}
              timeToRead={timeToRead}
              excerpt={excerpt}
              image={image}
              imageBlur={imageBlur}
              tags={tags}
              color={color}
            />
          )
        })}
      </div>

      {fairyTalesShown < cards.length && (
        <div className="mb-12 flex justify-center px-6 lg:px-12">
          <Button
            onClick={() => {
              const nextFairyTalesShown = fairyTalesShown + 3
              setFairyTalesShown(nextFairyTalesShown)
            }}
          >
            {dictionary.showMoreButton}
          </Button>
        </div>
      )}
    </>
  )
}
export default FairyTaleCards
