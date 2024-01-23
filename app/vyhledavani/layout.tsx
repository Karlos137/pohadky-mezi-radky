// React
import { Suspense } from 'react'

type SearchLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: "Vyhledávání | Pohádky mezi řádky",
  description: "Pohádky pro děti.",
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return <Suspense>{children}</Suspense>
}
export default SearchLayout
