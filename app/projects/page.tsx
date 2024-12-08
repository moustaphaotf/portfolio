"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RocketIcon } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="container max-w-screen-xl py-20">
      <h1 className="mb-8 text-2xl md:text-3xl font-bold">Featured Projects</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center md:pt-8 text-center"
      >
        <Card className="max-w-2xl p-8">
          <RocketIcon className="mx-auto h-6 md:h-12 w-6 md:w-12 mb-4 text-primary" />
          <h2 className="text-base md:text-xl font-semibold mb-4">
            Exciting Projects Coming Soon! 🚀
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            I'm currently working on some amazing projects that I can't wait to share with you.
            Stay tuned for updates as I showcase my best work in web development,
            AI, and cloud technologies.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}