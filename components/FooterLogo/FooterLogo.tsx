// Next.js
import Link from "next/link"

const FooterLogo = () => {
  return (
    <Link href="/" className="block uppercase">
      <span className="text-[34px] font-extrabold leading-[46px]">POHÁDKY</span>
      <br />
      <span className="text-[24px] leading-[33px] tracking-[0.14em]">
        MEZI ŘÁDKY
      </span>
    </Link>
  )
}
export default FooterLogo
