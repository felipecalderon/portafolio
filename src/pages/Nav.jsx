'use client'

import { useEffect, useState } from "react"
import { getfetch } from "./getFetchData"
const Nav = () => {
    const [name, setname] = useState(null)
    useEffect(() => {
        getfetch()
        .then(data => console.log(data))
    }, [])

    if(!name) return <p>Cargando nav...</p>
    return <h2>{name}</h2>
}

export default Nav