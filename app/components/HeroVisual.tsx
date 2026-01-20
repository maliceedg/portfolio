"use client";

import { motion } from "framer-motion";
import styles from "../styles/welcome.module.css";

const lines = [
  { n: "01", c1: "const", c2: "developer", rest: " = {" },
  { n: "02", rest: "  name: 'Edgardo'," },
  { n: "03", rest: "  focus: ['Frontend', 'UX', 'Performance']," },
  { n: "04", rest: "  location: 'Carabobo, VE'," },
  { n: "05", rest: "};" },
  { n: "06", rest: "developer.start();" },
];

export default function HeroVisual() {
  return (
    <div className={styles.visualWrap} aria-hidden="true">
      <div className={styles.visualGlowA} />
      <div className={styles.visualGlowB} />

      <motion.div
        className={styles.codeCard}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className={styles.codeTopBar}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>

        <div className={styles.codeBody}>
          {lines.map((l) => (
            <div key={l.n} className={styles.codeLine}>
              <span className={styles.codeNum}>{l.n}</span>
              <span className={styles.codeText}>
                {l.c1 ? (
                  <>
                    <span className={styles.codeKw}>{l.c1}</span>{" "}
                    <span className={styles.codeId}>{l.c2}</span>
                    <span className={styles.codePlain}>{l.rest}</span>
                  </>
                ) : (
                  <span className={styles.codePlain}>{l.rest}</span>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.codeInnerGlow} />
      </motion.div>

      <motion.div
        className={styles.statusCard}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4 }}
      >
        <div className={styles.statusIcon} />
        <div>
          <p className={styles.statusLabel}>Status</p>
          <p className={styles.statusValue}>Available</p>
        </div>
      </motion.div>
    </div>
  );
}
