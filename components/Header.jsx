"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ["Home", "Projects", "Skills", "Contact"]

  return (
    <header className="fixed w-full z-10 bg-[#F9FAFB] shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* <div className="text-2xl font-bold text-primary">TN</div> */}
          <div>
            <Image 
              src="/images/profile.jpg"
              width={40}
              height={40} className="rounded-full"
              alt="profile"
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-[#374151] font-semibold hover:text-[#4d79f0] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#374151] hover:text-[#4d79f0] font-semibold">
              Menu
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item} className="px-6 py-2">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-[#374151] hover:text-[#4d79f0] transition-colors font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

