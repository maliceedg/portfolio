"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import Image from "next/image";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const MQ = "(prefers-color-scheme: dark)";

function applyTheme(nextTheme: Theme) {
  if (nextTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function Nav() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const media = window.matchMedia(MQ);

    // If user has a saved preference, use it.
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      applyTheme(storedTheme);
      return;
    }

    // Otherwise, default to OS preference.
    const osTheme: Theme = media.matches ? "dark" : "light";
    setTheme(osTheme);
    applyTheme(osTheme);

    // If there's no saved preference, keep following OS changes.
    const onChange = (e: MediaQueryListEvent) => {
      const stillNoOverride = !localStorage.getItem(STORAGE_KEY);
      if (!stillNoOverride) return;

      const next: Theme = e.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };

    // Safari fallback: addListener/removeListener
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    } else {
      media.addListener(onChange);
      return () => media.removeListener(onChange);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/logo.webp" alt="Logo" width={84} height={84} priority />
      </Link>

      <button onClick={toggleTheme} className={styles.toggleButton}>
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <circle cx="12" cy="12" r="5" fill="#ffffff" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}
