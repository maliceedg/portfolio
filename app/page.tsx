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

const defaultAnimations = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const letterAnimations = {
  hidden: { opacity: 0, y: 50, scale: 0.5, rotate: -45 },
  visible: { opacity: 1, y: 0, scale: 1.2, rotate: 0 },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Welcome</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
        >
          <h1 className="flex flex-col mb-6">
            <motion.span className="text-2xl font-light">
              {Array.from("Welcome").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimations}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
            <span className="text-2xl font-bold">to My Portfolio</span>
          </h1>
        </motion.div>
        <motion.div
          className={styles.card}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
        >
          <p className="mb-4">
            My name is Edgardo Gonzalez, a COMPSI Engineer based in Carabobo,
            Venezuela.
          </p>
          <p className="mb-4">
            I have 7+ years of experience in the development field, in which
            I've partaken in multiple projects, mostly frontend, from inventory
            systems to modern LMS platforms.
          </p>
          <p>
            I'm passionate for user-friendly interfaces, quick systems, and
            clean interfaces.
          </p>
        </motion.div>
        <Link href="/projects" className={styles.glassButton}>
          See My Projects
        </Link>
      </div>
    </>
  );
}
