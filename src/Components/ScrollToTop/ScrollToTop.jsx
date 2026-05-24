/**
 * ScrollToTop component.
 * Displays floating scroll button
 * after user scrolls down.
 */

import "./ScrollToTop.css";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-top"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          transition={{
            duration: 0.3,
          }}
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
