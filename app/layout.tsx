// Global styles
import "./globals.css"

// Vercel analytics
import { Analytics } from "@vercel/analytics/react"

// Next Font
import { Nunito } from "next/font/google"

// React components
import Header from "@/components/Header"
import Footer from "@/components/Footer/"

const nunito = Nunito({ subsets: ["latin", "latin-ext"], display: "swap" })

export const metadata = {
  metadataBase: new URL("https://pohadkymeziradky.cz"),
  title: "Pohádky mezi řádky",
  description:
    "Vstupte do světa kouzelných pohádek pro děti! Na pohadkymeziradky.cz naleznete pohádky na dobrou noc plné dobrodružství, fantazie a přátelství.",
  openGraph: {
    title: "Pohádky mezi řádky",
    description:
      "Vstupte do světa kouzelných pohádek pro děti! Na pohadkymeziradky.cz naleznete pohádky na dobrou noc plné dobrodružství, fantazie a přátelství.",
    images: "/images/pohadky-mezi-radky.webp",
    siteName: "Pohádky mezi řádky",
    locale: "cs_CZ",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={`${nunito.className} app flex h-full flex-col`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
