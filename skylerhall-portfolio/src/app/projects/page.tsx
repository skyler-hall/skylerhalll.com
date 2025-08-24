const projects = [
  {
    title: "Spotify Data Visualizer",
    description:
      "Created and led a project to teach the fundamentals of HTML, CSS, and JavaScript using Chart.js to convert a music dataset into interactive charts.",
    link: "#",
  },
  {
    title: "Recyclepedia",
    description:
      "Led a team in collaboration with Miami-Dade County to redevelop their Recyclepedia website, resulting in 200 new active monthly users. The project used React, Firebase, Tailwind, and Next.js.",
    link: "#",
  },
  {
    title: "DriveWise",
    description:
      "Led a team to develop a route-planning tool that notifies users of commute times based on desired thresholds. The project integrated the Google Directions API and the Twilio API.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-accentPurple">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-background border border-accentPurple/30 rounded-xl p-6 shadow-neon hover:scale-105 hover:border-accentBlue transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-accentBlue mb-2">{project.title}</h2>
            <p className="text-textSecondary mb-2">{project.description}</p>
            <span className="text-accentPurple underline">View Project</span>
          </a>
        ))}
      </div>
    </section>
  );
}
