"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { inter } from "../ui/fonts";
import { projects } from "@/app/lib/projects";
import styles from "../styles/projects.module.css";

export default function Page({
  searchParams,
}: {
  readonly searchParams: { readonly project?: string };
}) {
  const param = searchParams.project;
  const activeProject = projects.find((project) => project.id === param);

  return (
    <main className={styles.container}>
      <div className="container mx-auto max-w-6xl md:mt-32 mt-16 lg:p-4 md:p-3 p-5">
        {activeProject ? (
          <div key={activeProject.id}>
            {/* 1) INTRO / BREADCRUMB + TITLE + META + TAGS + LOGO */}
            <section className="md:mb-14 mb-10">
              <Link href="/projects" className="inline-block mb-6">
                ← Back to Projects
              </Link>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                {/* Left: title/meta/tags/short description */}
                <div className="min-w-0">
                  <h1 className="text-4xl my-2">{activeProject.name}</h1>

                  {activeProject.caseStudy?.roleMeta && (
                    <p className="opacity-80 mt-2">
                      {activeProject.caseStudy.roleMeta}
                    </p>
                  )}

                  {activeProject.caseStudy?.stack?.length ? (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {activeProject.caseStudy.stack.map((tag) => (
                        <span key={tag} className={styles.chip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <p
                    className={`${inter.className} leading-relaxed opacity-90 mt-8 max-w-prose`}
                  >
                    {activeProject.description}
                  </p>
                </div>

                {/* Right: logo */}
                <div className="shrink-0">
                  <Image
                    src={activeProject.logo}
                    width={520}
                    height={420}
                    alt={`${activeProject.name} Logo`}
                    className="max-w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* 2) CASE STUDY FULL WIDTH (CON COLUMNA LEGIBLE) */}
            {activeProject.caseStudy?.sections && (
              <section className="md:mb-14 mb-10">
                <div className="h-px w-full bg-white/10 mb-10" />

                {/* “full width” del contenedor, pero texto legible */}
                <div className="w-full">
                  <div className="space-y-10">
                    <section>
                      <h2 className="text-xl font-semibold mb-2">Context</h2>
                      <p className="opacity-90 leading-relaxed">
                        {activeProject.caseStudy.sections.context}
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        The Challenge
                      </h2>
                      <p className="opacity-90 leading-relaxed">
                        {activeProject.caseStudy.sections.challenge}
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        Key Decisions
                      </h2>
                      <ul className="list-disc pl-5 space-y-2 opacity-90">
                        {activeProject.caseStudy.sections.decisions?.map(
                          (d) => (
                            <li key={d}>{d}</li>
                          )
                        )}
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">
                        Implementation
                      </h2>
                      <p className="opacity-90 leading-relaxed">
                        {activeProject.caseStudy.sections.implementation}
                      </p>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold mb-2">Outcome</h2>
                      <p className="opacity-90 leading-relaxed">
                        {activeProject.caseStudy.sections.outcome}
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            )}

            {/* 3) GALLERY / IMAGES */}
            <section className="md:mb-10 mb-6">
              <div className="h-px w-full bg-white/10 mb-10" />

              {/* Si quieres más ancho para imágenes en desktop */}
              <div className="flex flex-col gap-10">
                {activeProject.images.map((image, i) => (
                  <Image
                    key={i}
                    src={image.imageUrl}
                    width={1100}
                    height={700}
                    loading="lazy"
                    alt={image.alt}
                    className="mx-auto rounded shadow max-w-full h-auto"
                  />
                ))}
              </div>
            </section>
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:mb-16 mb-5">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded p-4 cursor-pointer"
                >
                  <Link href={`/projects?project=${project.id}`}>
                    <h2 className="text-2xl mb-2">{project.name}</h2>
                    <Image
                      src={project.logo}
                      width={300}
                      height={200}
                      alt={`${project.name} logo`}
                      className="mb-2"
                    />
                    <p>{project.description.slice(0, 100)}...</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
