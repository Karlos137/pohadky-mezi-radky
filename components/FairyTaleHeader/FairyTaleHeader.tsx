// Next.js
import Link from "next/link"

// Heroicons
import { BookOpenIcon, TagIcon } from "@heroicons/react/24/outline"

type FairyTaleHeaderProps = {
  title: string
  timeToRead: string
  tags: { slug: string; label: string }[]
}

const FairyTaleHeader = ({ title, timeToRead, tags }: FairyTaleHeaderProps) => {
  return (
    <div className="not-prose">
      <h1 className="mb-2 mt-12 text-center text-4xl leading-normal lg:mt-16 lg:text-6xl lg:leading-normal">
        {title}
      </h1>
      <div className="mb-12 flex items-center justify-center gap-4 lg:mb-16">
        <div className="flex items-center gap-1.5">
          <BookOpenIcon className="h-4 w-4" />
          <span className="text-sm">{timeToRead}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <TagIcon className="h-4 w-4" />
          <div className="text-sm">
            {tags.map((tag, i) => {
              return (
                <>
                  <Link
                    href={`/tag/${tag.slug}`}
                    className="no-underline hover:underline"
                  >
                    {tag.label}
                  </Link>

                  {tags.length !== i + 1 && `, `}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default FairyTaleHeader
