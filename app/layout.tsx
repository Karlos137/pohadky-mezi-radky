import "./globals.css"
import { Nunito } from "next/font/google"

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
      <body className={`${nunito.className} app h-full`}>{children}</body>
    </html>
  )
}
