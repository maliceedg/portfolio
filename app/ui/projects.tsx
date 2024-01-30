import clsx from "clsx";
import Link from "next/link";

const projects = [
  {
    name: 'PixelUniverse+', href: {
      pathname: '/pages/projects',
      query: {
        project: 'pixel',
      }
    }
  },
  {
    name: 'TheBiznation', href: {
      pathname: '/pages/projects',
      query: {
        project: 'tbn',
      }
    }
  },
  {
    name: 'Angeles', href: {
      pathname: '/pages/projects',
      query: {
        project: 'angeles',
      }
    }
  },
]

export default function Projects() {
  return (
    <main>
      <div>
        <h3 className="text-3xl">Projects</h3>
        <ul className="mt-6">
          {projects.map((project) => {
            return (
              <Link
                key={project.name}
                href={project.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-start font-medium text-lg md:flex-none md:justify-start md:p-2 md:px-3 md:m-0 m-4 hover:text-gray-500 duration-200'
                )}
              >
                <p className="hidden md:block text-highlight">{project.name}</p>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  )
}