// Card images
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

export const getColor = (color: string) => {
  switch (color) {
    case "red-700":
      return "bg-red-700"
    case "green-700":
      return "bg-green-700"
    default:
      return "bg-slate-700"
  }
}
