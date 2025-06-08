"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image";


const projects = [
  {
    title: "Foodeasy",
    description: "Foodeasy is a dynamic food blog website where users can explore and share delicious recipes. The platform allows users to comment on posts, like their favorite dishes, and add recipes to their personalized favorites list. Built with React.js, Tailwind CSS for a responsive UI, and Node.js with MongoDB for backend functionality, Foodeasy creates an engaging community for food enthusiasts.",
    // image: "/Foodeasy.png",
    image: "/resume/cheff.jpg",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    // liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Foodeasy",
  },
  {
    title: "Questa Blog",
    description: "Questa Blog is a dynamic and interactive blogging platform where users can create, edit, and share their thoughts. It features robust user authentication, real-time updates, and a clean, modern interface. Built with React.js, Node.js, and MongoDB, Questa Blog ensures smooth performance and scalability.",
    image: "/resume/Questa.png",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Questa_Blog",
  },
  {
    title: "PillTrust",
    description: "",
    // image: "/Foodeasy.png",
    image: "/resume/cheff.jpg",
    tags: ["Angular", "ASP .Net", "SQL"],
    // liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Foodeasy",
  },
  {
    title: "HR Analytics System ",
    description: "",
    // image: "/Foodeasy.png",
    image: "/resume/cheff.jpg",
    tags: ["Java Spring Boot", "React.js", "PostgreSQL", "Spring Security", "JWT", "Recharts", "Tailwind CSS"],
    // liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Foodeasy",
  },
  {
    title: "TheatreChalo – Movie Listing & Management Platform",
    description: "",
    // image: "/Foodeasy.png",
    image: "/resume/cheff.jpg",
    tags: ["React.js", "Redux", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    // liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Foodeasy",
  },
  {
    title: "Munify",
    description: "Munify is a vibrant music website designed for music enthusiasts to explore, stream, and share their favorite tracks. With an engaging user interface built using HTML, CSS, and JavaScript, Munify offers curated playlists, artist profiles, and a seamless listening experience for music lovers.",
    image: "/resume/Munify.png",
    tags: ["HTML", "CSS", "Javascript"],
    // liveUrl: "#",
    githubUrl: "https://github.com/SikhaChauhan/Ravel-The-Music-Buddy",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-red-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
                quality={75} 
                priority={index === 0} 
              />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

