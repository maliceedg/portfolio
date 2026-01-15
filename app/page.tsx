"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/welcome.module.css";
import TypewriterWelcome from "./components/TypeWritterWelcome";
import EnhancedCard from "./components/InformationCard";

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
      <Head>
        <title>My Portfolio - Welcome</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <div className={styles.container}>
        {/* Typewriter welcome animation */}
        <TypewriterWelcome />

        {/* Enhanced card with interactive effects */}
        <EnhancedCard />

        {/* Animated button */}
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }} // Increased delay to appear after all paragraphs
        >
          <Link href="/projects" className={styles.glassButton}>
            <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              See My Projects
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
