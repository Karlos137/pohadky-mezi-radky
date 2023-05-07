type FairyTalesLayoutProps = {
  children: React.ReactNode
}

const FairyTalesLayout = ({ children }: FairyTalesLayoutProps) => {
  return <article className="prose lg:prose-xl">{children}</article>
}
export default FairyTalesLayout
