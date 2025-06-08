"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const internships = [
  {
    title: "Site Management Intern",
    company: "Annalia Beauty",
    duration: "Feb 2025 - Feb 2025",
    description: "Managed and maintained the Annalia Beauty e-commerce website built on Shopify. Oversaw daily site operations, implemented design and content updates, resolved front-end issues, and ensured smooth user experience. Collaborated with the team to enhance site performance, customer engagement, and overall functionality."
  },
  {
    title: "Software Engineer Intern",
    company: "Capgemini",
    duration: "April 2025 - May 2025",
    description: "Independently developed 'PillTrust', a full-stack Pharmacy Management System using ASP.NET Core Web API, Angular, and SQL Server. Implemented features like role-based authentication, inventory tracking, billing, and invoice generation. Built as part of Capgemini’s internship evaluation to demonstrate proficiency in enterprise-level application development."
  },

//   {
//     title: "Data Science Intern",
//     company: "Data Insights Ltd.",
//     duration: "June 2023 - August 2023",
//     description: "Conducted data analysis and visualization using Python and Tableau."
//   }
]

export default function InternshipSection() {
  return (
    <section id="internship" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-red-500">Internships</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {internships.map((internship, index) => (
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
                  <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
                  <p className="text-red-500 mb-2">{internship.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{internship.duration}</p>
                  <p className="text-gray-300">{internship.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

