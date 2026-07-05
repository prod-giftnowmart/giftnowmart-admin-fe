"use client"

import { useRouter } from "next/navigation"


const Cards = () => {
    const router = useRouter()
    return (
        router.push("/products/all")
    )
}

export default Cards