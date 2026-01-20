import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/welcome.module.css";

const TypewriterWelcome = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const [portfolioText, setPortfolioText] = useState("");
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const typeWelcome = async () => {
      const text = "Start building";
      setWelcomeText("");
      setWelcomeComplete(false);

      for (let i = 0; i < text.length; i++) {
        await sleep(30);
        if (cancelled) return;
        setWelcomeText(text.slice(0, i + 1));
      }

      if (!cancelled) setWelcomeComplete(true);
    };

    const typePortfolio = async () => {
      const text = "Digital experiences that matter";
      setPortfolioText("");

      for (let i = 0; i < text.length; i++) {
        await sleep(60);
        if (cancelled) return;
        setPortfolioText(text.slice(0, i + 1));
      }
    };

    typeWelcome();
    const timeout = setTimeout(() => {
      void typePortfolio();
    }, 1200);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Eyebrow / kicker (más legible) */}
      <p className={styles.heroEyebrow}>
        <span
          className={`${styles.inlineBlock} ${
            !welcomeComplete ? styles.withCursor : ""
          }`}
        >
          {welcomeText}
        </span>
      </p>

      {/* Headline principal */}
      <h1 className={styles.heroTitleMain}>
        <span
          className={`${styles.inlineBlock} ${
            portfolioText.length > 0 ? styles.withCursor : ""
          }`}
        >
          {portfolioText}
        </span>
      </h1>
    </motion.div>
  );
};

export default TypewriterWelcome;
