"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { training } from '@/data'


export default function TrainingPage() {
  return (
    <div className="container max-w-screen-xl py-20">
      <h1 className="mb-8 text-3xl font-bold">Training & Certifications</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {training.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider} • {cert.date}
                  </p>
                </div>
                <p className="mb-4 text-muted-foreground">{cert.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {cert.certificate !== "" && (
                  <Button variant="outline" asChild>
                    <a
                      href={cert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}