"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavProps {
  items: { path: string; name: string }[];
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="flex h-full flex-col">
          <SheetTitle className="border-b px-6 py-4">Menu</SheetTitle>
          <nav className="flex-1 space-y-1 p-6">
            <AnimatePresence>
              {items.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex h-10 items-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent",
                        isActive ? "bg-accent" : "transparent"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}