// Next.js
import Link from "next/link"

// Dictionary
import dictionary from "@/utils/dictionary"

const NotFound = () => {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <h1 className="py-8">{dictionary.pages.notFound.title}</h1>
      <p className="mb-8 text-lg">{dictionary.pages.notFound.description}</p>
      <Link href="/" className="font-semibold uppercase hover:underline">
        {dictionary.pages.notFound.homepageButton}
      </Link>
    </div>
  )
}
export default NotFound
