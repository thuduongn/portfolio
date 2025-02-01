"use client";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#E0F2FE] pt-28 md:pt-20">
      <div className="container mx-auto px-6 text-center sm:mt-88">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-[#1E3A8A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thu Nguyen
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.div
          className="text-base md:text-xl mb-8 mx-auto space-y-4 max-w-prose md:max-w-[80ch]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="leading-relaxed text-text/80">
            With a background in marketing, I have always worked with people' struggles. I had come up with
            ideas to solve these problems, but often hit a wall when it came to actually making them happen.
          </p>
          <p className="leading-relaxed text-text/80">
            That feeling of limitation drove me to learn tech, so I could turn my ideas into reality. It's been a
            challenging journey, but it's also incredibly rewarding.
          </p>
          <p className="leading-relaxed text-text/80 font-semibold">
            Now, I'm excited to create solutions that not only work but genuinely help people.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="bg-[#1E3A8A] rounded-full text-white hover:bg-[#365ecb] mb-8 p-4">
            <a href="/Thu Duong Nguyen_Resume.pdf" download className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </button>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-4 mt-4 md:mt-8"
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
              <div className="p-2 transition-transform duration-300 hover:scale-125">
                <Icon size={28} />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}