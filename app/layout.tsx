// Global styles
import "./globals.css"

// Next Font
import { Nunito } from "next/font/google"

// React components
import Header from "@/components/Header"

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
      <body className={`${nunito.className} app h-full`}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  )
}
