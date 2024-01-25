'use client';

import Nav from "@/app/ui/nav";
import Projects from "@/app/ui/projects";
import { roboto } from "../app/ui/fonts";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ duration: .75, ease: 'easeOut' }}
          exit={{ opacity: 1 }}
          className='min-h-screen min-w-full flex flex-col justify-center bg-orange-100 text-gray-900 absolute top-0'>

          <div className="container flex flex-col justify-center lg:p-0 p-5 lg:mx-auto tracking-wide lg:mt-0 mt-32">

            {/* Title */}
            <div className='svg-container lg:w-96 w-full'>
              <svg viewBox="0 0 750 150">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle" className={`${roboto.className}`}>
                  Welcome.
                </text>
              </svg>
            </div>

            {/* Description */}
            <div className='flex flex-row justify-between flex-wrap mt-10'>
              <div className='lg:basis-2/4 highlight p-1 shadow-lg'>
                <div className='bg-orange-100 h-full p-5 flex'>
                  <p className='text-base m-auto'>
                    Nam vel ligula lobortis, volutpat justo non, semper lorem. Nulla facilisi.
                    <br />
                    Nam nisi ex, varius sed velit bibendum, faucibus tempus tellus.
                    Fusce egestas, risus nec dapibus placerat, ligula quam mattis ipsum, ut mollis diam purus in erat.
                  </p>
                </div>

              </div>
              <div className='lg:basis-1/4 justify-end w-full lg:mt-0 mt-10 highlight p-1 shadow-lg'>
                <div className='bg-orange-100 rounded p-5 h-full'>
                  <Projects />
                </div>
              </div>
            </div>
          </div>

          <footer>
            hey
          </footer>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
