export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link || undefined}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className="group block overflow-hidden rounded-xl2 border border-line bg-navy-800 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover"
    >
      {project.image && (
        <div className="aspect-[4/3] overflow-hidden bg-mist">
          <img
            src={project.image}
            alt={`${project.client} — ${project.category}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-700">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.client}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{project.summary}</p>
        {project.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-lime-50 px-3 py-1 text-xs font-medium text-lime-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
