import { motion } from "framer-motion";
import { useState, useRef } from "react";
import styles from "../styles/welcome.module.css";

const EnhancedCard = () => {
  // Track mouse position for light effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for lighting effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Staggered animation for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 3 + i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.enhancedCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
    >
      {/* Light effect overlay */}
      <div
        className={styles.cardGlow}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.04) 0%, transparent 60%)`,
        }}
      />

      {/* Card border */}
      <div className={styles.cardBorder}></div>

      {/* Card content with staggered animations */}
      <div className={styles.cardContent}>
        <motion.p
          className="mb-4"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          My name is Edgardo Gonzalez, a COMPSI Engineer based in Carabobo,
          Venezuela.
        </motion.p>

        <motion.p
          className="mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          I have 7+ years of experience in the development field, in which I've
          partaken in multiple projects, mostly frontend, from inventory systems
          to modern LMS platforms.
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          I'm passionate for user-friendly interfaces, quick systems, and clean
          interfaces.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EnhancedCard;
