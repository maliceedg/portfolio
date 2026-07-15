import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/welcome.module.css";

const WELCOME_TEXT = "Start building";
const PORTFOLIO_TEXT = "Digital experiences that matter";

type TypewriterWelcomeProps = {
  skipAnimation?: boolean;
};

const TypewriterWelcome = ({ skipAnimation = false }: TypewriterWelcomeProps) => {
  const [welcomeText, setWelcomeText] = useState(
    skipAnimation ? WELCOME_TEXT : ""
  );
  const [portfolioText, setPortfolioText] = useState(
    skipAnimation ? PORTFOLIO_TEXT : ""
  );
  const [welcomeComplete, setWelcomeComplete] = useState(skipAnimation);

  useEffect(() => {
    if (skipAnimation) {
      setWelcomeText(WELCOME_TEXT);
      setPortfolioText(PORTFOLIO_TEXT);
      setWelcomeComplete(true);
      return;
    }

    let cancelled = false;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const typeWelcome = async () => {
      const text = WELCOME_TEXT;
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
      const text = PORTFOLIO_TEXT;
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
  }, [skipAnimation]);

  return (
    <motion.div
      initial={skipAnimation ? false : "hidden"}
      animate="visible"
      transition={
        skipAnimation
          ? { duration: 0 }
          : { duration: 1, ease: "easeOut" }
      }
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
            !skipAnimation && portfolioText.length > 0 ? styles.withCursor : ""
          }`}
        >
          {portfolioText}
        </span>
      </h1>
    </motion.div>
  );
};

export default TypewriterWelcome;
