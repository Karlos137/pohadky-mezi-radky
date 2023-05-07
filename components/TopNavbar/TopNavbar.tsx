// React components
import Logo from "../Logo"
import SearchBox from "../SearchBox"

const TopNavbar = () => {
  return (
    <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-8 px-6 py-3 lg:px-12">
      <Logo />
      <SearchBox />
    </div>
  )
}
export default TopNavbar
