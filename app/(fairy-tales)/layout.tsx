type FairyTalesLayoutProps = {
  children: React.ReactNode
}

const FairyTalesLayout = ({ children }: FairyTalesLayoutProps) => {
  return (
    <article className="prose prose-invert mx-auto lg:prose-xl">
      {children}
    </article>
  )
}
export default FairyTalesLayout
