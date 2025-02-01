"use client";
import React from "react";
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 lg:mb-16 text-[#1E3A8A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Message
        </motion.h2>
        <motion.div 
          className="flex justify-center space-x-12 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} 
        >
          {[
            { Icon: Github, href: "https://github.com/thuduongn" },
            { Icon: Mail, href: "mailto:nguyenthuduong22@gmail.com" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/thuduongnguyen" },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target={href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors"
            >
              <div className="transition-transform duration-300 hover:scale-125">
                <Icon size={28} />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

