"use client"

// Router
import { useRouter } from "next/navigation"

// React
import { useState } from "react"

const SearchBox = () => {
  const router = useRouter()
  const [value, setValue] = useState("")

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    router.push(`/vyhledavani?s=${value}`)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[412px] grow">
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Hledej pohádku"
        name="search"
        required={true}
        className="block w-full rounded-[100px] border border-indigo-50 bg-transparent px-4 py-2"
      />
    </form>
  )
}
export default SearchBox
