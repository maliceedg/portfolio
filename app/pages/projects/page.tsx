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
      className='min-h-screen bg-sky-200 absolute min-w-full top-0 lg:py-96 py-32 lg:p-0 p-5'>
      <div className="container flex flex-col justify-center mx-auto">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <BackArrow />
              <h1 className='text-4xl mb-16'>
                {project.name}
              </h1>

              <div className="flex justify-between flex-wrap">
                <div className="lg:basis-1/2">
                  <p className={`${inter.className}`}>{project.description}</p>
                </div>
                <div className="lg:basis-1/2 basis-1 flex flex-wrap items-center">
                  {project.images.map((image, i) => {
                    return (
                      <Image
                        key={i}
                        src={image.imageUrl}
                        width={300}
                        height={500}
                        alt="PixelUniverse+ Logo"
                        className="mb-10 mx-auto"
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <BounceArrow />
    </motion.main>
  );
}