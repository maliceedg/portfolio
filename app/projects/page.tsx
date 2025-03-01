"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { inter } from "../ui/fonts";
import { projects } from "@/app/lib/projects";
import Footer from "@/app/ui/footer";
import styles from "../styles/projects.module.css";

export default function Page({
  searchParams,
}: {
  readonly searchParams: { readonly project?: string };
}) {
  const param = searchParams.project;
  const activeProject = projects.find((project) => project.id === param);

  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className={styles.container}
      /* className="h-full absolute min-w-full top-0 lg:pt-40 pt-28 lg:p-0 p-5 overflow-auto" */
    >
      <div className="container flex flex-col justify-center mx-auto md:mt-32 mt-16 lg:p-4 md:p-3 p-5">
        {activeProject ? (
          // Detail View for a Single Project
          <div key={activeProject.id}>
            <Link href="/projects">← Back to Projects</Link>
            <h1 className="text-4xl md:mb-16 my-5">{activeProject.name}</h1>
            <div className="flex justify-between md:flex-wrap flex-wrap-reverse md:mb-16 mb-8">
              <div className="md:basis-1/2">
                <p className={`${inter.className} md:mt-0 mt-10`}>
                  {activeProject.description}
                </p>
              </div>
              <div className="md:basis-1/2">
                <Image
                  src={activeProject.logo}
                  width={500}
                  height={400}
                  alt={`${activeProject.name} Logo`}
                  className="mx-auto lg:mt-0 mt-5"
                />
              </div>
            </div>
            <div className="lg:basis-1/2 md:mt-0 mt-10 flex flex-wrap items-center">
              {activeProject.images.map((image, i) => (
                <Image
                  key={i}
                  src={image.imageUrl}
                  width={600}
                  height={600}
                  loading="lazy"
                  alt={image.alt}
                  className="mb-10 mx-auto rounded shadow"
                />
              ))}
            </div>
          </div>
        ) : (
          // Grid View of Projects
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
    </motion.main>
  );
}
