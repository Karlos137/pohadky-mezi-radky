type FairyTalesLayoutProps = {
  children: React.ReactNode
}

const FairyTalesLayout = ({ children }: FairyTalesLayoutProps) => {
  return (
    <article className="prose prose-invert mx-auto mb-16 max-w-[856px] px-6 lg:prose-xl lg:mb-20 lg:px-12">
      {children}
    </article>
  )
}
export default FairyTalesLayout
