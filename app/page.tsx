"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/welcome.module.css";
import TypewriterWelcome from "./components/TypeWritterWelcome";
import EnhancedCard from "./components/InformationCard";
import HeroVisual from "./components/HeroVisual";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Welcome</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <div className={styles.container}>
        <div className={styles.heroWrap}>
          <div className={styles.heroGrid}>
            {/* Left: Text */}
            <div className={styles.heroLeft}>
              <div className={styles.kickerLine} />

              <TypewriterWelcome />

              <EnhancedCard />

              <motion.div
                className={styles.ctaRow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
              >
                <Link href="/projects" className={styles.primaryButton}>
                    See My Projects
                </Link>

                <Link href="/about" className={styles.secondaryButton}>
                  About
                </Link>

                <Link href="https://www.linkedin.com/in/maliceedg/" className={styles.secondaryButton}>
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <div className={styles.heroRight}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
