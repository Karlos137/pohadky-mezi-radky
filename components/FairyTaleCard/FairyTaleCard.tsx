// Next.js
import Image from "next/image"
import Link from "next/link"

// Tailwind Merge
import { twMerge } from "tailwind-merge"

// Heroicons
import { BookOpenIcon, TagIcon } from "@heroicons/react/24/outline"

type FairyTaleCardProps = {
  title: string
  url: string
  timeToRead: string
  excerpt: string
  image: string
  imageBlur: string
  tags: string[]
  color: string
}

const FairyTaleCard = ({
  title,
  url,
  timeToRead,
  excerpt,
  image,
  imageBlur,
  tags,
  color,
}: FairyTaleCardProps) => {
  const getColor = (color: string) => {
    switch (color) {
      case "red-700":
        return "bg-red-700"
      case "red-900":
        return "bg-red-900"
      case "orange-700":
        return "bg-orange-700"
      case "orange-900":
        return "bg-orange-900"
      case "green-700":
        return "bg-green-700"
      case "green-900":
        return "bg-green-900"
      case "purple-700":
        return "bg-purple-700"
      case "purple-900":
        return "bg-purple-900"
      case "teal-700":
        return "bg-teal-700"
      case "teal-900":
        return "bg-teal-900"
      case "pink-700":
        return "bg-pink-700"
      case "pink-900":
        return "bg-pink-900"
      case "blue-700":
        return "bg-blue-700"
      case "blue-900":
        return "bg-blue-900"
      case "cyan-700":
        return "bg-cyan-700"
      case "cyan-900":
        return "bg-cyan-900"
      default:
        return "bg-slate-700"
    }
  }
  return (
    <Link
      href={url}
      className="group flex min-h-[525px] flex-col rounded-[30px] shadow-lg"
    >
      <div className="relative aspect-[380/250] overflow-hidden rounded-t-[30px]">
        <Image
          src={image}
          fill={true}
          alt={title}
          quality={85}
          placeholder="blur"
          blurDataURL={imageBlur}
          sizes="100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
          className="delay-50 rounded-t-[30px] object-cover transition duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div
        className={twMerge(
          "flex grow flex-col rounded-b-[30px] px-5 py-4",
          getColor(color)
        )}
      >
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
