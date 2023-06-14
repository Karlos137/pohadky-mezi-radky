// React
import FooterLogo from "../FooterLogo"

// Dictionary
import dictionary from "@/utils/dictionary"

const Footer = () => {
  return (
    <footer className="mt-auto flex max-w-[1920px] flex-col items-center gap-4 bg-midnight-900 px-6 py-4 text-center shadow-md lg:rounded-r-[200px] lg:px-12">
      <FooterLogo />
      <p className="font-medium">
        <span>&copy;</span>{" "}
        {`${new Date().getFullYear()} ${dictionary.footer.copyright.title}`}
      </p>
      <p className="mx-auto max-w-[760px] text-xs font-light">
        {dictionary.footer.copyright.description}
      </p>
    </footer>
  )
}
export default Footer
