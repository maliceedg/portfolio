"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { projects } from "@/app/lib/projects";
import styles from "../styles/projects.module.css";

type ProjectsPageProps = {
  readonly searchParams?: { readonly project?: string | string[] };
};

function normalizeProjectId(input?: string | string[]) {
  const raw = Array.isArray(input) ? input[0] : input;
  if (!raw) return undefined;

  const decoded = (() => {
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  })();

  const trimmed = decoded.trim();
  return trimmed.length ? trimmed : undefined;
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const activeId = normalizeProjectId(searchParams?.project);
  const hasActiveId = Boolean(activeId);

  const activeProject = hasActiveId
    ? projects.find((p) => p.id === activeId)
    : undefined;

  const sections = activeProject?.caseStudy?.sections;

  let content: React.ReactNode = null;
  if (activeProject) {
    content = (
      <>
        {/* Detail for activeProject */}
        <section className="space-y-10">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="min-w-0">
              <Link href="/projects" className="inline-block opacity-80">
                ← Back to Projects
              </Link>

              <h1 className="text-4xl mt-3">{activeProject.name}</h1>

              {activeProject.caseStudy?.roleMeta ? (
                <p className="opacity-80 mt-2">
                  {activeProject.caseStudy.roleMeta}
                </p>
              ) : null}

              {activeProject.url ? (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm opacity-80 hover:opacity-100 underline underline-offset-4"
                >
                  Visit live site →
                </a>
              ) : null}
            </div>

            <div className="shrink-0">
              <Image
                src={activeProject.logo}
                width={220}
                height={90}
                alt={`${activeProject.name} logo`}
                className="h-auto w-auto max-w-[220px]"
                priority
              />
            </div>
          </div>

          {/* Summary */}
          <p className="opacity-90 leading-relaxed max-w-3xl">
            {activeProject.description}
          </p>

          {/* Tags */}
          {activeProject.caseStudy?.stack?.length ? (
            <div className="flex flex-wrap gap-2">
              {activeProject.caseStudy.stack.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {/* Case Study (this is the content you were missing) */}
          {sections ? (
            <section
              className={[
                "rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg",
                "p-6 md:p-8",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-semibold">Case study</h2>
                <span className="text-xs opacity-70">Context → Outcome</span>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Context */}
                {sections.context ? (
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      Context
                    </h3>
                    <p className="mt-2 opacity-90 leading-relaxed">
                      {sections.context}
                    </p>
                  </div>
                ) : null}

                {/* Challenge */}
                {sections.challenge ? (
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      The challenge
                    </h3>
                    <p className="mt-2 opacity-90 leading-relaxed">
                      {sections.challenge}
                    </p>
                  </div>
                ) : null}

                {/* Key Decisions */}
                {Array.isArray(sections.decisions) &&
                sections.decisions.length ? (
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      Key decisions
                    </h3>
                    <ul className="mt-3 list-disc pl-5 space-y-2 opacity-90">
                      {sections.decisions.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Implementation */}
                {sections.implementation ? (
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      Implementation
                    </h3>
                    <p className="mt-2 opacity-90 leading-relaxed">
                      {sections.implementation}
                    </p>
                  </div>
                ) : null}

                {/* Outcome */}
                {sections.outcome ? (
                  <div className="lg:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wide uppercase opacity-90">
                      Outcome
                    </h3>
                    <p className="mt-2 opacity-90 leading-relaxed">
                      {sections.outcome}
                    </p>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {/* Images */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Visual references</h2>

            <div className="flex flex-col gap-10">
              {activeProject.images && activeProject.images.length > 0 ? (
                activeProject.images.map((img, i) => (
                  <Image
                    key={`${activeProject.id}-${i}`}
                    src={img.imageUrl}
                    width={1200}
                    height={800}
                    alt={img.alt}
                    className="rounded-xl border border-white/10 shadow max-w-full h-auto"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))
              ) : (
                <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                  <p className="text-sm opacity-80">
                    Visual references are not available for this project.
                  </p>
                  <p className="mt-2 text-xs opacity-60">
                    Some work involved internal tools, documentation, or
                    non-public systems.
                  </p>
                </div>
              )}
            </div>
          </section>
        </section>
      </>
    );
  } else if (hasActiveId) {
    content = (
      /* Has ?project=... but no match */
      <section className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-lg p-6">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="opacity-80 mt-2">
          No project matches: <span className="font-mono">{activeId}</span>
        </p>
        <div className="mt-5">
          <Link href="/projects" className="inline-block opacity-90">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  } else {
    content = (
      <>
        {/* Grid */}
        <header className="mb-10">
          <h1 className="text-4xl">My Projects</h1>
          <p className="opacity-80 mt-3 max-w-2xl leading-relaxed">
            A selection of production work focused on clean UI systems,
            performance, and maintainable delivery. Each project includes a
            concise case study and visual references.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="h-full"
            >
              <Link
                href={`/projects?project=${project.id}`}
                className={[
                  "group block h-full rounded-2xl",
                  "flex flex-col",
                  "bg-white/10 backdrop-blur-lg",
                  "border border-white/15",
                  "shadow-sm hover:shadow-md",
                  "transition-[transform,box-shadow,background-color] duration-200",
                  "p-5",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold leading-snug">
                    {project.name}
                  </h2>

                  <div className="inline-flex items-center gap-2 opacity-70 text-sm">
                    <span className="h-2 w-2 rounded-full bg-white/50" />
                    <span>Case study</span>
                  </div>
                </div>

                <div className="mt-4">
                  <Image
                    src={project.logo}
                    width={260}
                    height={100}
                    alt={`${project.name} logo`}
                    className="h-auto w-auto max-w-[260px]"
                    loading="lazy"
                  />
                </div>

                <p className="mt-4 opacity-85 leading-relaxed text-sm">
                  {project.description.length > 140
                    ? `${project.description.slice(0, 140)}...`
                    : project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(project.caseStudy?.stack ?? []).slice(0, 4).map((tag) => (
                    <span key={`${project.id}-${tag}`} className={styles.chip}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="opacity-80 text-sm">View details →</span>

                  {project.url ? (
                    <span className="opacity-60 text-xs">
                      Live: {project.url.replace(/^https?:\/\//, "")}
                    </span>
                  ) : (
                    <span className="opacity-60 text-xs">No public URL</span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </>
    );
  }

  return (
    <main className={styles.container}>
      <div className="container mx-auto max-w-6xl md:mt-32 mt-16 lg:p-4 md:p-3 p-5">
        {/* Breadcrumb */}
        <div className="flex gap-4 mb-8">
          <Link href="/" className="opacity-80">
            Home
          </Link>
          <span className="opacity-90">
            Projects
            <div className={styles.kickerLine} />
          </span>
        </div>

        {/* Detail */}
        {content}
      </div>
    </main>
  );
}
