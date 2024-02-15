"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export default function Navbar() {
    const [cart, setCart] = useState(0)

  return (
    <nav className= "flex justify-between px-[2rem] py-8">
        <ul className="flex items-start gap-4">
            <li>
                <Link href="/">
                <Image src="/logo.png" alt="logo" width="32" height="32"/>
                </Link>
            </li>
            <li>
                <Link href="/" className="flex flex-col">
                <span>Coderite</span>
                <span>Coding FOr Africa</span>
                </Link>
            </li>
        </ul>
        <ul className="md:flex hidden justify-center gap-6">
            <li>
                <Link href="/latest">Latest</Link>
            </li>
            <li>
                <Link  href="/topics">Topics</Link>
            </li>
            <li>
                <Link  href="/about">About</Link>
            </li>
            <li>
                <Link  href="/contact">Contact</Link>
            </li>
            <li>
                <Link  href="/cart" className="flex items-center gap-2">
                    <FaShoppingBasket />
                    <span>{cart}</span>
                </Link>
            </li>
        </ul>
        <ul className="md:hidden inline">
            <li>
                <GiHamburgerMenu />
            </li>
        </ul>
    </nav>
  )
}
