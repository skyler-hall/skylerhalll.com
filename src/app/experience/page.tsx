import SectionHeader from "../_components/SectionHeader";

export default function Experience() {
  return (
    <section className="py-12 animate-fade-in">
      <SectionHeader title="Experience" accent="neonPurple" />
      <div className="space-y-8">
        <div className="bg-background border border-neonBlue rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-neonBlue mb-2">Software Engineer Intern, Vanguard</h2>
          <ul className="list-disc ml-6 text-foreground">
            <li>Co-developed a full-stack Appian tool for request management.</li>
            <li>Designed a centralized dashboard with real-time status updates.</li>
            <li>Developed a user-facing intake app to standardize request submissions.</li>
          </ul>
        </div>
        <div className="bg-background border border-neonPurple rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-neonPurple mb-2">Teaching Assistant, Programming 2</h2>
          <ul className="list-disc ml-6 text-foreground">
            <li>Taught JavaScript and Python to middle and high school students.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
