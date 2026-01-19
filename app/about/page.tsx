import Link from "next/link";
import styles from "../styles/about.module.css";
import { inter } from "../ui/fonts";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <div className="container mx-auto max-w-6xl md:mt-32 mt-16 lg:p-4 md:p-3 p-5">
        <header className="w-full">
          <div className="flex gap-4 mb-4">
            <Link href="/" className="opacity-80">
              Home
            </Link>
            <span className="opacity-90">
              About
              <div className={styles.kickerLine} />
            </span>
          </div>

          <div className="flex flexwrap gap-6 items-center">
            <Image
              src="/profile-pic.png"
              alt="Profile"
              width={128}
              height={128}
              className="border border-white/20 rounded-full"
              priority
            />

            <div>
              <h1 className="text-4xl leading-tight">
                Designing and building user-facing products with scalable UI
                systems and performance in mind.
              </h1>

              <p
                className={`${inter.className} mt-6 leading-relaxed opacity-90`}
              >
                I'm Edgardo Gonzalez, a COMPSI Engineer based in Carabobo,
                Venezuela. I work on frontend-focused products ranging from
                landing experiences to full platforms, combining UI
                architecture, UX thinking, and performance-oriented
                implementation. My background allows me to bridge design
                decisions with real-world technical constraints.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left */}
          <section className="lg:col-span-7 min-w-0">
            <div className={styles.card}>
              <h2 className={styles.h2}>What I do</h2>
              <ul className="list-disc pl-5 space-y-3 opacity-90">
                <li>
                  Design and implement scalable UI architectures for
                  production-ready web products.
                </li>
                <li>
                  Improve performance and perceived speed on real user
                  interfaces.
                </li>
                <li>
                  Translate business and product requirements into clean,
                  reusable components.
                </li>
                <li>
                  Build polished experiences with strong UX fundamentals and
                  maintainable codebases.
                </li>
              </ul>
            </div>

            <div className={`${styles.card} mt-8`}>
              <h2 className={styles.h2}>Principles</h2>
              <ul className="space-y-3 opacity-90">
                <li>
                  <span className={styles.bulletLabel}>Clarity:</span> readable
                  code, predictable UI behavior, and clear user flows.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Pragmatism:</span>{" "}
                  shipping value without overengineering or unnecessary
                  complexity.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Quality:</span>{" "}
                  performance, accessibility, and consistency across devices.
                </li>
                <li>
                  <span className={styles.bulletLabel}>Ownership:</span> closing
                  loops, documenting decisions, and supporting what I ship.
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
                <Link
                  href="https://www.linkedin.com/in/maliceedg/"
                  className={styles.link}
                >
                  Contact →
                </Link>
                <a
                  href="/UX_UI Designer – D2C & Conversion-Focused Web Experiences.pdf"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume →
                </a>
              </div>
            </div>

            <div className={`${styles.card} mt-8`}>
              <h2 className={styles.h2}>Quick facts</h2>
              <ul className="mt-4 space-y-2 opacity-90">
                <li>Location: Carabobo, VE</li>
                <li>
                  Experience: 7+ years across frontend, UX/UI, and web systems
                </li>
                <li>
                  Languages: English (native), Spanish (native), Portuguese
                  (learning)
                </li>
                <li>
                  Work style: async-friendly, structured delivery, clear
                  communication
                </li>
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
                If you want to discuss a project, collaboration, or role, feel
                free to reach out. I’m always open to meaningful work where
                product quality and user experience matter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/projects" className={styles.primaryBtn}>
                  See Projects
                </Link>
                <Link
                  href="https://www.linkedin.com/in/maliceedg/"
                  className={styles.secondaryBtn}
                >
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
