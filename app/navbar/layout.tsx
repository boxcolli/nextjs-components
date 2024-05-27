'use client'

import { useState } from "react"

const items = [
  'menu A',
  'menu B',
  'menu C',
]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() { setMenuOpen(!menuOpen) }

  return (
    <>
      {/* Navbar */}
      <div className="flex flex-wrap items-center justify-between m-8">
        {/* Home button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Home
        </button>

        {/* Expand button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="
            md:hidden
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>

        {/* Navbar */}
        <div
          className={`
            ${menuOpen ? "" : "hidden"}
            md:block md:w-auto
            w-full
          `}
        >
          <div
            className="
              flex gap-2
              flex-col
              md:flex-row md:mt-0
              border-2 mt-2 p-2
            "
          >
            {items.map((item, index) => {
              return <button
                className="hover:bg-gray-500 h-12"
              >
                {item}
              </button>
            })}
          </div>
        </div>
      </div>


      <hr className="my-8" />

      <>
        {children}
      </>
    </>
  )
}
