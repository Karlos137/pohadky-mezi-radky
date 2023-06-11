// Next.js
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="block uppercase" title="POHÁDKY MEZI ŘÁDKY">
      <span className="text-[18px] font-extrabold">POHÁDKY</span>{" "}
      <br className="md:hidden" />
      <span className="text-[14px] font-medium tracking-[0.05rem] md:tracking-normal">
        MEZI ŘÁDKY
      </span>
    </Link>
  )
}
export default Logo
