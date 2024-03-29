// Tailwind Merge
import { twMerge } from "tailwind-merge"

// React components
import Tag from "../Tag"

// Constants
import { TAGS } from "../../utils/constants"

const TagsBar = () => {
  return (
    <ul className="scrollbar-hide mx-auto flex max-w-[1920px] items-center gap-4 overflow-x-auto bg-midnight-900 py-5 shadow-md lg:rounded-l-[100px]">
      {TAGS.map((tag, i) => {
        const { label, slug } = tag
        return (
          <li
            key={slug}
            className={twMerge(
              "",
              i === 0 && "pl-5",
              i + 1 === TAGS.length && "pr-5"
            )}
          >
            <Tag label={label} href={`/tag/${slug}`} />
          </li>
        )
      })}
    </ul>
  )
}
export default TagsBar
