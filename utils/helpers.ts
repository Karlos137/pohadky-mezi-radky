import hvezdnaCestaImg from "../public/images/fairy-tales/hvezdna-cesta/hvezdna-cesta-2.png"
import defaultImg from "../public/images/fairy-tales/hvezdna-cesta/hvezdna-cesta-5.png"

export const getCardImage = (fairyTaleTitle: string) => {
  switch (fairyTaleTitle) {
    case "Hvězdná cesta":
      return hvezdnaCestaImg
    default:
      return defaultImg
  }
}
