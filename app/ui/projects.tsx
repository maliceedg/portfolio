const projects = [
  { name: 'PixelUniverse+', href: 'https://pixeluniverseplus.com' },
  { name: 'Prueba', href: 'google.com' },
  { name: 'Prueba', href: 'google.com' },
]

export default function Projects() {
  return (
    <main>
      <div>
        <h3 className="text-3xl">Projects</h3>
        <ul className="mt-6">
          {projects.map((project) => {
            return (
              <li className="mt-2 text-lg">
                <a href={project.href}>{project.name}</a>
              </li>
            )
          })
          }
        </ul>
      </div>
    </main>
  )
}