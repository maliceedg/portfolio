import Link from "next/link";
import styles from "../styles/about.module.css";
import { inter } from "../ui/fonts";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <div className="container mx-auto max-w-6xl md:mt-32 mt-16 lg:p-4 md:p-3 p-5">
        <header className="w-full">
          <div className="flex gap-4 mb-4">
            <Link href="/projects" className="opacity-80">
              Home
            </Link>
            <p className="opacity-90">
              About
              <div className={styles.kickerLine} />
            </p>
          </div>

          <div className="flex flexwrap gap-6 items-center">
            <img src="/profile-pic.png" alt="Profile" className="w-32 h-32 border border-white/15 rounded-full" />

            <div>
              <h1 className="text-4xl leading-tight">
                Building user-facing products with clean UI systems and
                performance in mind.
              </h1>

              <p
                className={`${inter.className} mt-6 leading-relaxed opacity-90`}
              >
                I’m Edgardo Gonzalez, a COMPSI Engineer based in Carabobo,
                Venezuela. I build frontend-focused products from landing
                experiences to platforms, with emphasis on maintainability, UX,
                and speed.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left */}
          <section className="lg:col-span-7 min-w-0">
            <div className={styles.card}>
              <h2 className={styles.h2}>What I do</h2>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li>
                  Design and implement UI architecture for scalable products.
                </li>
                <li>
                  Improve performance and perceived speed on real interfaces.
                </li>
                <li>Translate requirements into clean, reusable components.</li>
                <li>
                  Ship polished experiences with clear UX and strong
                  fundamentals.
                </li>
              </ul>
            </div>

            <div className={`${styles.card} mt-8`}>
              <h2 className={styles.h2}>Principles</h2>
              <ul className="space-y-3 opacity-90">
                <li>
                  <span className={styles.bulletLabel}>Clarity:</span> readable
                  code and predictable UI.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Pragmatism:</span> ship
                  value without overengineering.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Quality:</span>{" "}
                  performance, accessibility, and consistency.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Ownership:</span> I close
                  loops and document decisions.
                </li>
              </ul>
            </div>
          </section>

          {/* Right */}
          <aside className="lg:col-span-5 min-w-0">
            <div className={styles.card}>
              <h2 className={styles.h2}>Focus</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Frontend",
                  "UI Architecture",
                  "Performance",
                  "UX",
                  "Design Systems",
                  "Next.js / React",
                ].map((tag) => (
                  <span key={tag} className={styles.chip}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-px w-full my-8 opacity-20 bg-white" />

              <h2 className={styles.h2}>Links</h2>
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/projects" className={styles.link}>
                  View Projects →
                </Link>
                <Link href="/contact" className={styles.link}>
                  Contact →
                </Link>
                {/* Si tienes CV, habilítalo */}
                {/* <a href="/resume.pdf" className={styles.link} target="_blank" rel="noreferrer">Resume →</a> */}
              </div>
            </div>

            <div className={`${styles.card} mt-8`}>
              <h2 className={styles.h2}>Quick facts</h2>
              <ul className="mt-4 space-y-2 opacity-90">
                <li>Location: Carabobo, VE</li>
                <li>Experience: 7+ years</li>
                <li>Work style: async-friendly, structured delivery</li>
              </ul>
            </div>
          </aside>
        </div>

        <footer className="mt-14">
          <div className={styles.cta}>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold">
                Let’s build something solid.
              </h2>
              <p
                className={`${inter.className} mt-3 opacity-90 leading-relaxed`}
              >
                If you want to discuss a project, collaboration, or a role, feel
                free to reach out.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className={styles.primaryBtn}>
                  See Projects
                </Link>
                <Link href="https://www.linkedin.com/in/maliceedg/" className={styles.secondaryBtn}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
