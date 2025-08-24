import SectionHeader from "../_components/SectionHeader";

export default function Projects() {
  return (
    <section className="py-12 animate-fade-in">
      <SectionHeader title="Projects" accent="neonBlue" />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-background border border-neonPurple rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-neonPurple transition-transform">
          <h2 className="text-xl font-semibold text-neonPurple mb-2">Spotify Data Visualizer</h2>
          <p className="mb-2">Created and led a project to teach HTML, CSS, and JavaScript using Chart.js to convert a music dataset into interactive charts.</p>
          <a href="#" className="text-neonBlue underline">Live Demo / Code</a>
        </div>
        <div className="bg-background border border-neonBlue rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-neonBlue transition-transform">
          <h2 className="text-xl font-semibold text-neonBlue mb-2">Recyclepedia</h2>
          <p className="mb-2">Led a team with Miami-Dade County to redevelop their Recyclepedia website, resulting in 200 new active monthly users. Used React, Firebase, Tailwind, Next.js.</p>
          <a href="#" className="text-neonPurple underline">Live Demo / Code</a>
        </div>
        <div className="bg-background border border-neonPurple rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-neonPurple transition-transform">
          <h2 className="text-xl font-semibold text-neonPurple mb-2">DriveWise</h2>
          <p className="mb-2">Developed a route-planning tool that notifies users of commute times based on thresholds. Integrated Google Directions API and Twilio API.</p>
          <a href="#" className="text-neonBlue underline">Live Demo / Code</a>
        </div>
      </div>
    </section>
  );
}
