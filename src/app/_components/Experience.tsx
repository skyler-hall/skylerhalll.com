const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Vanguard",
      description: [
        "Co-developed a full-stack Appian tool for request management.",
        "Designed a centralized dashboard with real-time status updates.",
        "Developed a user-facing intake app to standardize request submissions."
      ]
    },
    {
      role: "Teaching Assistant, Programming 2",
      company: "Florida International University",
      description: [
        "Taught JavaScript and Python to middle and high school students."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
  <h2 className="section-heading">Experience</h2>
        <div className="section-body" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--neonBlue)', fontWeight: 700 }}>
            View My Resume
          </a>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{index === 0 ? 'August 2024 - Present' : index === 1 ? 'June 2024 - August 2024' : ''}</div>
              <div className="timeline-content">
                <h3 className="job-title section-heading">{exp.role}</h3>
                <div className="company section-body">{exp.company}</div>
                <div className="job-desc section-body">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
