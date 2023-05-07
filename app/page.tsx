import { allFairyTales } from "contentlayer/generated"

const Home = () => {
  return (
    <>
      <div className="mx-auto mb-16 max-w-[760px] text-center">
        <h1 className="pb-4 pt-8">Všechny pohádky</h1>
        <p>
          Vítejte na webové stránce plné pohádek pro děti! Přinášíme Vám
          kouzelné příběhy, které budou vaše děti milovat. Naše kolekce zahrnuje
          moderní pohádky pro novou generaci, s neobyčejnými hrdiny a kouzelnými
          světy, které okouzlí i ty nejnáročnější čtenáře. Připojte se k nám a
          vychutnejte si kouzlo pohádek!
        </p>
      </div>
      {allFairyTales.map((fairyTale, i) => {
        return <div key={i}>title: {fairyTale.title}</div>
      })}
    </>
  )
}
export default Home
