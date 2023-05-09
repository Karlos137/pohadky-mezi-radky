// Global styles
import "./globals.css"

// Next Font
import { Nunito } from "next/font/google"

// React components
import Header from "@/components/Header"
import Footer from "@/components/Footer/"

const nunito = Nunito({ subsets: ["latin", "latin-ext"], display: "swap" })

export const metadata = {
  title: "Pohádky mezi řádky",
  description: "Pohádky pro děti.",
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
      </body>
    </html>
  )
}