// Next.js
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="block uppercase">
      <span className="text-[18px] font-extrabold">POHÁDKY</span>{" "}
      <span className="text-[14px] font-medium">MEZI ŘÁDKY</span>
    </Link>
  )
}
export default Logo
