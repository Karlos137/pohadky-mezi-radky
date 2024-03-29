// Next.js
import Link from "next/link"

// React components
import Button from "@/components/Button/Button"

// Dictionary
import dictionary from "@/utils/dictionary"

export const metadata = {
  title: "Stránka nenalezena | Pohádky mezi řádky",
  description:
    "Vstupte do světa kouzelných pohádek pro děti! Na pohadkymeziradky.cz naleznete sbírku pohádek plných dobrodružství, fantazie a přátelství.",
}

const NotFound = () => {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <h1 className="py-8">{dictionary.pages.notFound.title}</h1>
      <p className="mb-8 text-lg">{dictionary.pages.notFound.description}</p>
      <Link href="/" className="font-semibold uppercase hover:underline">
        <Button>{dictionary.pages.notFound.homepageButton}</Button>
      </Link>
    </div>
  )
}
export default NotFound
