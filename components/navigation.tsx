"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
    const path = usePathname()

    console.log(path) // only worked client component
    return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link> {path === "/" ? "good" : ""}
            </li>

            <li>
                <Link href="/about-us">About-Us</Link> {path === "/about-us" ? "good" : ""}
            </li>
        </ul>
    </nav>
    )
}