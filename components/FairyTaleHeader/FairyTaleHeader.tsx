// Next.js
import Link from "next/link"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

// Heroicons
import { BookOpenIcon, TagIcon } from "@heroicons/react/24/outline"

// Helpers
import { getColor } from "@/utils/helpers"

type FairyTaleHeaderProps = {
  title: string
  color: string
  timeToRead: string
  tags: { slug: string; label: string }[]
}

const FairyTaleHeader = ({
  title,
  color,
  timeToRead,
  tags,
}: FairyTaleHeaderProps) => {
  return (
    <div className="not-prose !mt-8 rounded-lg pb-4 pt-8 lg:pb-5">
      <div className="mx-auto max-w-[808px] px-6">
        <h1 className="mb-2 text-center text-4xl leading-normal lg:text-6xl lg:leading-normal">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1.5">
            <BookOpenIcon className="h-4 w-4" />
            <span className="text-sm">{timeToRead}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <TagIcon className="h-4 w-4" />
            <div className="text-sm">
              {tags.map((tag, i) => {
                return (
                  <span key={tag.slug}>
                    <Link
                      href={`/tag/${tag.slug}`}
                      className="no-underline hover:underline"
                    >
                      {tag.label}
                    </Link>

                    {tags.length !== i + 1 && `, `}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          "mx-auto mt-8 flex h-0.5 w-full max-w-[100px] justify-center lg:mt-11",
          getColor(color)
        )}
      ></div>
    </div>
  )
}
export default FairyTaleHeader
