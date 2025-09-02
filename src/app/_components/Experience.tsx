const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Vanguard",
      date: "May 2025 – August 2025",
      description: [
        "Co-developed Application Processor, a full-stack Appian tool to streamline intake tracking for 50+ internal apps.",
        "Built Record Types, Interfaces, and Process Models to track requests, app records, and enhancement submissions.",
        "Developed a user-facing intake app to standardize request submissions across departments.",
        "Designed a centralized dashboard with real-time status updates and automated notifications to improve requester visibility.",
        "Participated in a hackathon, developing an Angular front-end integrated with Flask and Bedrock to process tax documents and display savings reports."
      ]
    },
    {
      role: "Team Lead",
      company: "Recyclepedia",
      date: "Sep 2024 – Dec 2024",
      description: [
        "Led a team of 12 developers to redevelop the Recyclepedia website and create an iOS/Android app using React, React Native, Next.js, and Tailwind CSS.",
        "Managed the development of the site's structure and features, resulting in a more engaging platform that improved user interaction."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Florida International University",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Supported 56 students in Programming 2 (Java), holding weekly office hours to clarify OOP concepts and provide individualized guidance."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>
        <div className="section-body" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <a href="/Skyler Hall's Current Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--neonBlue)', fontWeight: 700 }}>
            View My Resume
          </a>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
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
