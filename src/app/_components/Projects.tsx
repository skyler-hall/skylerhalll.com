const Projects = () => {
  const projects = [
    {
      title: "Spotify Data Visualizer",
      description: "Created and led a project to teach the fundamentals of HTML, CSS, and JavaScript using Chart.js to convert a music dataset into interactive charts.",
      link: "#"
    },
    {
      title: "Recyclepedia",
      description: "Led a team in collaboration with Miami-Dade County to redevelop their Recyclepedia website, resulting in 200 new active monthly users. The project used React, Firebase, Tailwind, and Next.js.",
      link: "#"
    },
    {
      title: "DriveWise",
      description: "Led a team to develop a route-planning tool that notifies users of commute times based on desired thresholds. The project integrated the Google Directions API and the Twilio API.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
  <h2 className="section-heading">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={`/project-${index + 1}.svg`} alt={project.title} className="project-thumb" />
              <div className="project-info">
                <h3 className="section-heading">{project.title}</h3>
                <p className="section-body">{project.description}</p>
                <div>
                  <a href={project.link} className="text-neonBlue font-semibold hover:underline">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
