"use client";
import React from "react";
import { motion } from "framer-motion"

const frontend = [
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap"
  ]

const backend = [
    "Node.js",
    "C# .NET",
    "ASP.NET MVC",
    "Python",
    "Java",
    "Azure",
  ]
  
const database = [
    "SQL",
    "MS SQL",
    "Oracle",
    "MongoDB",
    "Firebase",
    "MySQL",
    "PostgreSQL",
  ]

  export default function Skills() {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-16 text-[#1E3A8A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            >
            Skills & Technologies
          </motion.h2>
          <div className="pb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 lg:mb-10 text-[#374151]">FrontEnd</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {frontend.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#E0F2FE] transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="pb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 lg:mb-10 text-[#374151]">BackEnd</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {backend.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#E0F2FE] transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 lg:mb-10 text-[#374151]">Database</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {database.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-[#E0F2FE] transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  