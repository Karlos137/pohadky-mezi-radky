// React components
import FairyTaleCard from "../FairyTaleCard"

const FairyTaleCards = () => {
  return (
    <div className="mx-auto mb-12 grid max-w-[1300px] grid-cols-1 gap-x-7 gap-y-16 px-6 md:grid-cols-2 lg:mb-16 lg:px-12 xl:grid-cols-3">
      <FairyTaleCard />
      <FairyTaleCard />
      <FairyTaleCard />
      <FairyTaleCard />
      <FairyTaleCard />
      <FairyTaleCard />
    </div>
  )
}
export default FairyTaleCards
