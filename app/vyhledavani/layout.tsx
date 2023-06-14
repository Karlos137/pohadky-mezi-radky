type SearchLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: "Vyhledávání | Pohádky mezi řádky",
  description: "Pohádky pro děti.",
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return <>{children}</>
}
export default SearchLayout
