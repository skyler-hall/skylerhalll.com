import SectionHeader from "../_components/SectionHeader";

export default function Skills() {
  return (
    <section className="py-12 animate-fade-in">
      <SectionHeader title="Skills" accent="neonPurple" />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-background border border-neonBlue rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-neonBlue mb-2">Proficient</h2>
          <ul className="list-disc ml-6 text-foreground">
            <li>Java</li>
            <li>React</li>
            <li>Python</li>
            <li>C++</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Node.js, Next.js, Express</li>
            <li>Tailwind, Git, GitHub</li>
          </ul>
        </div>
        <div className="bg-background border border-neonPurple rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-neonPurple mb-2">Familiar</h2>
          <ul className="list-disc ml-6 text-foreground">
            <li>Firebase</li>
            <li>SQL</li>
            <li>Appian</li>
            <li>RESTful APIs</li>
            <li>AngularJS</li>
            <li>Flask</li>
            <li>Typescript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
