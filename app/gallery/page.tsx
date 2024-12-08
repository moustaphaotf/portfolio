"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="container max-w-screen-xl py-20">
      <h1 className="mb-8 text-2xl md:text-3xl font-bold">Gallery</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <Card className="max-w-2xl p-8">
          <ImageIcon className="mx-auto h-12 w-12 mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-4">
            Gallery Coming Soon! 📸
          </h2>
          <p className="text-muted-foreground">
            A visual journey through my professional experiences, events, and achievements
            will be available here soon. Check back later for an immersive gallery experience!
          </p>
        </Card>
      </motion.div>
    </div>
  );
}