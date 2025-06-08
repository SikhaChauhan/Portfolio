"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Programming Languages",
    items: ["C#", "Java", "JavaScript"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "Angular","HTML5", "CSS3", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", ".NET Core", "ASP.NET", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDb", "SQL"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Postman", "SQL Server"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="text-red-500">Skills</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-black/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4 text-red-500">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

