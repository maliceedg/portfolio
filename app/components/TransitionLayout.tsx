"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        style={{ width: "100%", height: "100%" }}
        initial={{ opacity: 0, x: 10, y: 10 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          transitionEnd: { opacity: 1, x: 0, y: 0 },
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
