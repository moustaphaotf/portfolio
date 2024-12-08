"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from '@/data'

export default function ExperiencePage() {
  return (
    <div className="container max-w-screen-xl py-20">
      <h1 className="mb-8 text-2xl md:text-3xl font-bold">Professional Experience</h1>
      <div className="relative">
        <div className="absolute left-8 top-0 h-full w-px bg-border md:left-1/2 hidden md:block" />
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div
                className={`md:text-right ${
                  index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold">{experience.role}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{experience.company}</p>
                <p className="text-sm text-muted-foreground text-sm md:text-base text-sm md:text-base">{experience.period}</p>
              </div>
              <div
                className={`${
                  index % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"
                }`}
              >
                <div className="absolute left-8 top-6 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-ml-1.5 hidden md:block" />
                <p className="mb-4 text-sm">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm!">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}