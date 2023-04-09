'use client'

import { useEffect, useState } from "react"
import { getfetch } from "../getFetchData"
import Link from "next/link"
const Nav = () => {
    const [nav, setNav] = useState(null)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        getfetch('/api/menu')
        .then(data => {
            setNav(data)
        })
    }, [])

    if(!nav) return <p>Cargando nav...</p>
    return (
        <nav className="bg-gray-200 dark:bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-gray-800 dark:text-white font-bold text-xl">
                Inicio
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {
                    nav.map(({name, link}) => {
                        return <Link
                        key={name}
                        href={link}
                        className="text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                      > {name} </Link>
                    })
                  }
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="text-gray-800 dark:text-white hover:text-gray-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </nav>
    )
}

export default Nav