"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/welcome.module.css";
import TypewriterWelcome from "./components/TypeWritterWelcome";
import EnhancedCard from "./components/InformationCard";
import HeroVisual from "./components/HeroVisual";
import { getHomeIntroSeen, setHomeIntroSeen } from "./lib/homeIntro";

/** Last home intro motion starts at 4.5s and lasts 0.6s */
const INTRO_COMPLETE_MS = 5200;

export default function Home() {
  const [skipIntro, setSkipIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    setSkipIntro(getHomeIntroSeen());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || skipIntro) return;
    const timeout = window.setTimeout(() => {
      setHomeIntroSeen();
    }, INTRO_COMPLETE_MS);
    return () => window.clearTimeout(timeout);
  }, [ready, skipIntro]);

  if (!ready) {
    return <div className={styles.container} aria-hidden="true" />;
  }

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

              <TypewriterWelcome skipAnimation={skipIntro} />

              <EnhancedCard skipAnimation={skipIntro} />

              <motion.div
                className={styles.ctaRow}
                initial={skipIntro ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  skipIntro
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 4.5 }
                }
              >
                <Link href="/projects" className={styles.primaryButton}>
                  See My Projects
                </Link>

                <Link href="/about" className={styles.secondaryButton}>
                  About
                </Link>

                <Link
                  href="https://www.linkedin.com/in/maliceedg/"
                  className={styles.secondaryButton}
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <div className={styles.heroRight}>
              <HeroVisual skipAnimation={skipIntro} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
