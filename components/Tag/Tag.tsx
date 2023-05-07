// Next.js
import Link from "next/link"

type TagProps = {
  label: string
  href: string
}

const Tag = ({ label, href }: TagProps) => {
  return (
    <Link
      href={href}
      title={label}
      className="rounded-lg bg-midnight-950 px-4 py-2 transition-colors hover:bg-lavender-500"
    >
      {label}
    </Link>
  )
}
export default Tag
