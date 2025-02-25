"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("Stored theme:", storedTheme);
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className="text-xl font-bold cursor-pointer">Edgardo G.</span>
      </Link>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded focus:outline-none"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
