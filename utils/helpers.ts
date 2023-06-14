// Card images
import oZviratkachAJejichPestrobarvneZahradeImg from "../public/images/fairy-tales/o-zviratkach-a-jejich-pestrobarevne-zahrade/o-zviratkach-a-jejich-pestrobarevne-zahrade.webp"
import magickaLesniZemeImg from "../public/images/fairy-tales/magicka-lesni-zeme/magicka-lesni-zeme.webp"
import hvezdnaCestaImg from "../public/images/fairy-tales/hvezdna-cesta/hvezdna-cesta-2.png"
import defaultImg from "../public/images/fairy-tales/hvezdna-cesta/hvezdna-cesta-5.png"

export const getCardImage = (fairyTaleTitle: string) => {
  switch (fairyTaleTitle) {
    case "Hvězdná cesta":
      return hvezdnaCestaImg
    case "O zvířátkách a jejich pestrobarevné zahradě":
      return oZviratkachAJejichPestrobarvneZahradeImg
    case "Magická lesní země":
      return magickaLesniZemeImg
    default:
      return defaultImg
  }
}
