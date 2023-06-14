"use client"

// React
import { useState, useEffect } from "react"

// Next.js
import Link from "next/link"

// Contentlayer
import { allFairyTales } from "contentlayer/generated"

// React components
import Button from "../Button"

// Dictionary
import dictionary from "@/utils/dictionary"

const RandomFairyTaleButton = () => {
  const [randomFairyTaleLink, setRandomFairyTaleLink] = useState(
    allFairyTales[Math.floor(Math.random() * allFairyTales.length)].url
  )

  useEffect(() => {
    setRandomFairyTaleLink(
      allFairyTales[Math.floor(Math.random() * allFairyTales.length)].url
    )
  })

  return (
    <Link
      href={randomFairyTaleLink}
      className="mt-8 flex justify-center px-6 lg:px-12"
      onClick={() => {
        setRandomFairyTaleLink(
          allFairyTales[Math.floor(Math.random() * allFairyTales.length)].url
        )
      }}
    >
      <Button>{dictionary.pages.homepage.randomFairyTaleButton}</Button>
    </Link>
  )
}
export default RandomFairyTaleButton
