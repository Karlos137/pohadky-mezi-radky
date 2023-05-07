// Next.js
import Image from "next/image"
import Link from "next/link"

// Heroicons
import { BookOpenIcon, TagIcon } from "@heroicons/react/24/outline"

type FairyTaleCardProps = {
  title: string
  url: string
  timeToRead: string
  excerpt: string
  tags: string[]
  image: string
}

const FairyTaleCard = ({
  title,
  url,
  timeToRead,
  excerpt,
  tags,
  image,
}: FairyTaleCardProps) => {
  return (
    <Link
      href={url}
      className="group flex min-h-[475px] flex-col rounded-[30px] shadow-lg"
    >
      <div className="relative aspect-[380/250] overflow-hidden rounded-t-[30px]">
        <Image
          src={image}
          fill={true}
          alt="Test"
          className="delay-50 rounded-t-[30px] object-cover transition duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex grow flex-col rounded-b-[30px] bg-green-700 px-5 py-4">
        <h2 className="mb-2">{title}</h2>
        <div className="mb-2 flex items-center gap-1.5">
          <BookOpenIcon className="h-4 w-4" />
          <span className="text-sm">{timeToRead}</span>
        </div>
        <p className="mb-8">{excerpt}</p>
        <div className="mt-auto flex items-center gap-1.5">
          <TagIcon className="h-4 w-4" />
          <span className="text-sm">{tags.join(", ")}</span>
        </div>
      </div>
    </Link>
  )
}
export default FairyTaleCard
