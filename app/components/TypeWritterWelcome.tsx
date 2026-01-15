import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/welcome.module.css";

const TypewriterWelcome = () => {
  const [welcomeText, setWelcomeText] = useState("");
  const [portfolioText, setPortfolioText] = useState("");
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  const [portfolioComplete, setPortfolioComplete] = useState(false);

  useEffect(() => {
    const typeWelcome = async () => {
      const text = "Welcome";
      setWelcomeText("");

      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 80));
        setWelcomeText(text.substring(0, i + 1));
      }

      setWelcomeComplete(true);
    };

    const typePortfolio = async () => {
      const text = "to My Portfolio";
      setPortfolioText("");

      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 60));
        setPortfolioText(text.substring(0, i + 1));
      }

      setPortfolioComplete(true);
    };

    typeWelcome();

    const portfolioTimeout = setTimeout(() => {
      typePortfolio();
    }, 1200);

    return () => clearTimeout(portfolioTimeout);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="flex flex-col mb-6">
        <span className="text-2xl font-light relative">
          <span className="inline-block">{welcomeText}</span>
          {!welcomeComplete ||
          (welcomeComplete && portfolioText.length === 0) ? (
            <span
              className={`${styles.animateBlink} transition-opacity duration-300`}
            >
              |
            </span>
          ) : null}
        </span>
        <span className="text-2xl font-bold relative">
          <span className="inline-block">{portfolioText}</span>
          {portfolioText.length > 0 && (
            <span className={styles.animateBlink}>|</span>
          )}
        </span>
      </h1>
    </motion.div>
  );
};

export default TypewriterWelcome;
