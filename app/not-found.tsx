// Next.js
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="mx-auto max-w-[760px] text-center">
      <h1 className="py-8">Stránka nebyla nalezena</h1>
      <p className="mb-8 text-lg">
        Je nám líto, ale zdá se, že jste se ztratili v digitálním vesmíru. Na
        této stránce není nic zajímavého k vidění. Můžeme vám nabídnout jen
        slib, že naše ostatní stránky jsou mnohem méně ztracené a mnohem více
        zábavné. :)
      </p>
      <Link href="/" className="font-semibold uppercase hover:underline">
        Přejít na hlavní stránku
      </Link>
    </div>
  )
}
export default NotFound
