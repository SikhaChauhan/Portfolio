'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    links.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6 fixed top-0 z-50 bg-black/50 backdrop-blur-md w-full"
    >
      <nav className="flex justify-start items-center w-full px-4">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-red-500"
        >
          Sikha
        </motion.span>

        <ul className="hidden md:flex gap-8 ml-8 flex-grow">
          {links.map((link) => (
            <motion.li key={link.label} whileHover={{ y: -2 }}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`${
                  activeSection === link.href.slice(1)
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-400 hover:text-white transition-colors"
                }`}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
