// React
import FooterLogo from "../FooterLogo"

const Footer = () => {
  return (
    <footer className="mt-auto flex max-w-[1920px] flex-col items-center gap-4 bg-midnight-900 px-6 py-4 text-center shadow-md lg:rounded-r-[200px] lg:px-12">
      <FooterLogo />
      <p className="font-medium">
        <span>&copy;</span>
        {` ${new Date().getFullYear()} Všechna práva vyhrazena`}
      </p>
      <p className="mx-auto max-w-[760px] text-xs font-light">
        Rádi bychom vás upozornili, že všechny pohádky na této stránce jsou
        chráněny autorskými právy a jakékoliv kopírování, šíření či další
        použití bez našeho výslovného souhlasu je zakázáno. Naše pohádky jsou
        určeny pro zábavu a vzdělávání dětí a nemají za cíl urážet či
        poškozovat. Upozorňujeme, že se zříkáme jakékoliv odpovědnosti za
        případné následky čtení našich pohádek. Děkujeme za vaše pochopení.
      </p>
    </footer>
  )
}
export default Footer
