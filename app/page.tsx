"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal, projects } from "@/data";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-8 text-center"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src={personal.avatar}
          alt={personal.name}
          className="h-32 w-32 rounded-full object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{personal.name}</h1>
          <p className="text-sm md:text-xl text-muted-foreground">{personal.role}</p>
        </div>
        <p className="max-w-2xl text-xs md:text-base text-muted-foreground">{personal.bio}</p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={personal.social.email}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}