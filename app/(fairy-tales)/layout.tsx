type FairyTalesLayoutProps = {
  children: React.ReactNode
}

const FairyTalesLayout = ({ children }: FairyTalesLayoutProps) => {
  return (
    <article className="prose prose-invert mx-auto mb-16 max-w-[1200px] lg:prose-xl lg:mb-20">
      {children}
    </article>
  )
}
export default FairyTalesLayout
