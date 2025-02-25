"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "../app/styles/welcome.module.css";

const AnimatedBackground = () => (
  <svg
    className={styles.animatedBackground}
    width="100%"
    height="100%"
    viewBox="0 0 2500 2500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fb9d5c" stopOpacity="1" />
        <stop offset="100%" stopColor="#fbab73" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fdc7a2" stopOpacity="1" />
        <stop offset="100%" stopColor="#fb9d5c" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="800" cy="1100" r="400" fill="url(#grad1)" />
    <circle cx="1250" cy="1400" r="700" fill="url(#grad2)" />
    <circle cx="1700" cy="1100" r="400" fill="url(#grad1)" />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="flex flex-col mb-4">
            <span className="text-xl font-light">Welcome</span>
            <span className="text-xl font-bold">to My Portfolio</span>
          </h1>
          <p>Hi, I'm [Your Name]. I build awesome projects.</p>
          <Link href="/projects">See My Projects</Link>
        </motion.div>
      </div>
    </>
  );
}
