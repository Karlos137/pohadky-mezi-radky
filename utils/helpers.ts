import hvezdnaCestaImg from "../public/fairy-tales/images/hvezdna-cesta/hvezdna-cesta-2.png"
import defaultImg from "../public/fairy-tales/images/hvezdna-cesta/hvezdna-cesta-5.png"

export const getCardImage = (fairyTaleTitle: string) => {
  switch (fairyTaleTitle) {
    case "Hvězdná cesta":
      return hvezdnaCestaImg
    default:
      return defaultImg
  }
}
