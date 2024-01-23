import Image from 'next/image'
import Nav from "@/app/ui/nav";
import Projects from "@/app/ui/projects";
import { roboto } from "../app/ui/fonts";

export default function Home() {
  return (
    <main className="min-h-screen lg:w-2/3 w-full flex flex-col justify-center lg:p-24 p-5 lg:mx-auto tracking-wide">
      <Nav />
      {/* Title */}
      {/* <h3 className={`${inter.className} text-5xl`}>Welcome.</h3> */}
      <div className='svg-container lg:w-96 w-full'>
        <svg viewBox="0 0 750 150">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle" className={`${roboto.className}`}>
            Welcome.
          </text>
        </svg>
      </div>


      <div className='flex flex-row justify-between flex-wrap mt-10'>
        <div className='lg:basis-2/4 highlight p-1'>
          <div className='bg-neutral-800 h-full p-5 flex'>
            <p className='text-base m-auto'>
              Nam vel ligula lobortis, volutpat justo non, semper lorem. Nulla facilisi.
              <br />
              Nam nisi ex, varius sed velit bibendum, faucibus tempus tellus.
              Fusce egestas, risus nec dapibus placerat, ligula quam mattis ipsum, ut mollis diam purus in erat.
            </p>
          </div>

        </div>
        <div className='lg:basis-1/4 justify-end w-full lg:mt-0 mt-10 highlight p-1'>
          <div className='bg-neutral-800 rounded p-5 h-full'>
            <Projects />
          </div>
        </div>
      </div>

      {/* <div className="highlight p-1 mt-10">
        <div className='bg-neutral-800 p-5 rounded'>a</div>
      </div> */}
    </main>
  )
}
