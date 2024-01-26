'use client';

import BounceArrow from "@/app/ui/bounce-arrow";
import BackArrow from "@/app/ui/back-arrow";
import { motion } from "framer-motion";
import Image from "next/image";
import { inter } from "../../../app/ui/fonts";
import { projects } from "@/app/lib/projects";

export default function Page(
  { searchParams }: { searchParams: { project: string } }
) {
  projects;

  return (
    <motion.main
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: .75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className='h-full bg-orange-200 absolute min-w-full top-0 lg:pt-48 pt-28 lg:p-0 p-5 overflow-auto'>
      <div className="container flex flex-col justify-center mx-auto">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <BackArrow />
              <h1 className='text-4xl md:mb-16 mb-5'>
                {project.name}
              </h1>

              <div className="flex justify-between md:flex-wrap flex-wrap-reverse md:mb-16 mb-8 md:">
                <div className="md:basis-1/2">
                  <p className={`${inter.className} md:mt-0 mt-10`}>{project.description}</p>
                </div>

                {/* Logo */}
                <div className="md:basis-1/2">
                  <Image
                    key={project.id}
                    src={project.logo}
                    width={500}
                    height={400}
                    alt="PixelUniverse+ Logo"
                    className="mx-auto lg:mt-0 mt-5"
                  />
                </div>
              </div>

              <div className="lg:basis-1/2 md:mt-0 mt-10 flex flex-wrap items-center">
                {project.images.map((image, i) => {
                  return (
                    <Image
                      key={i}
                      src={image.imageUrl}
                      width={700}
                      height={600}
                      alt={image.alt}
                      className="mb-10 mx-auto rounded shadow"
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <BounceArrow />
    </motion.main>
  );
}