const projects = [
  { name: 'PixelUniverse+', href: 'https://pixeluniverseplus.com' },
  { name: 'Prueba', href: 'google.com' },
  { name: 'Prueba1', href: 'google2.com' },
]

export default function Projects() {
  return (
    <main>
      <div>
        <h3 className="text-3xl">Projects</h3>
        <ul className="mt-6">
          {projects.map((project, i) => {
            return (
              <li key={i} className="mt-2 text-lg">
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