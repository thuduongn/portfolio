"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    description: "A fullstack admin dashboard for ecommerce platform",
    image: "/images/projects/dashboard.png",
    tools: "API, ReactJS, NodeJS, MongoDB, Tailwind CSS",
    github: "https://github.com/thuduongn/ecommerce",
    deployment: ""
  },
  {
    id: 2,
    title: "Education Landing Page",
    description: "A booking page to book demo class and manage appointments",
    image: "/images/projects/education-landing-page.png",
    tools: "NextJS, Firebase, Tailwind CSS",
    github: "https://github.com/thuduongn/education-landing-page",
    deployment: "https://education-landing-page-gules.vercel.app"
  },
  {
    id: 3,
    title: "Ecommerce Page",
    description: "An ecommerce page allow buyers to search and buy products",
    image: "/images/projects/fashion-ecommerce.png",
    tools: "ASP.NET MVC, MS SQL, Bootstrap",
    github: "https://github.com/thuduongn/fashion-ecommerce",
    deployment: ""
  },
  {
    id: 4,
    title: "QR Generator",
    description: "Generate a QR code from any link and scan to access it on other devices",
    image: "/images/projects/qrgenerator.png",
    tools: "API, NextJS, NodeJS",
    github: "https://github.com/thuduongn/qrgenerator",
    deployment: "https://qrgenerator-delta-wheat.vercel.app"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-16 text-[#1E3A8A]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#374151]">{project.title}</h3>
              <p className="text-[#374151]/80 mb-2"><i>{project.description}</i></p>
              <p className="text-[#374151]/80">{project.tools}</p>
              <div className="flex flex-row">
                {[
                  { Icon: Github, href: project.github },
                  { Icon: Link, href: project.deployment },
                ]
                  .filter(({ href }) => href)
                  .map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target={href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="text-text hover:text-primary transition-colors"
                    >
                      <div className="mt-6 pr-4 transition-transform duration-300 hover:scale-125 text-[#1E3A8A]">
                        <Icon size={24} />
                      </div>
                    </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

