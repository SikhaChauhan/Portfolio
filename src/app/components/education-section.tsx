"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "GLA  University",
    year: "2021-2025",
    description: "Specialized in Full Stack Development",
  },
  {
    degree: "12th",
    institution: "R.L.P.K.D School",
    year: "2020-21",
    description: "Completed 12th grade with a focus on Physics, Chemistry, Mathematics (PCM), along with additional subjects in Painting and Python programming from CBSE Board.",
  },
  {
    degree: "10th",
    institution: "R.L.P.K.D School",
    year: "2018-19",
    description: "Completed High School, covering a broad curriculum with a focus on foundational subjects from CBSE Board.",
  }  
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-red-500">Education</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-8 relative"
            >
              <div className="flex-none">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-red-500 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

