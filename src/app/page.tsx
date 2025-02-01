'use client'
import { motion } from "framer-motion"
import { Github, Linkedin, Download } from 'lucide-react'
import FloatingElements from "./components/floating-elements"
import Navigation from "./components/navigation"
import ProjectsSection from "./components/projects-section"
import SkillsSection from "./components/skills-section"
import EducationSection from "./components/education-section"
import ContactSection from "./components/contact-section"
import img from "../../public//resume/123.jpg";
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4">
        <Navigation />
        
        <main className="relative z-10">
          <div id="home" className="min-h-[calc(100vh-80px)] flex items-center">
            {/* Hero section content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-3xl" />
                <Image
                  src={img}
                  width={98}
                  height={98}
                  alt="Portfolio Image"
                  className="relative z-10 w-full max-w-lg mx-auto rounded-full"
                />
              </motion.div> */}

<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full blur-3xl" />
  <Image
    src={img}
    alt="Portfolio Image"
    layout="intrinsic" 
    width={300}  
    height={300}
    className="relative z-10 w-full mt-10 max-w-lg mx-auto rounded-full"
  />
</motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Hi, It&apos;s{" "}
                  <span className="text-red-500 inline-block hover:scale-110 transition-transform">
                    Sikha
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-5xl text-gray-400">
                  I&apos;m a{" "}
                  <span className="text-red-500 font-semibold">Software Developer</span>
                </h2>
                <p className="text-gray-400 max-w-lg">
                  Passionate about creating beautiful and functional web experiences. 
                  Specializing in modern web technologies and creative development solutions.
                </p>

                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/sikha-chauhan-00b60223a/", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/SikhaChauhan", label: "GitHub" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-red-500/10 hover:bg-red-500/20 rounded-full flex items-center justify-center text-red-500 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    // href="/5.pdf"
                    href="/resume/Sikha_Resume-1.pdf"
                    download = "Sikha_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gray-900 rounded-full text-white font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Resume
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

