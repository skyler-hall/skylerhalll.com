export default function Skills() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-accentPurple">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-accentBlue mb-2">Proficient</h2>
          <ul className="list-disc ml-6 text-textSecondary">
            <li>Java</li>
            <li>React</li>
            <li>Python</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Tailwind</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-accentBlue mb-2">Familiar</h2>
          <ul className="list-disc ml-6 text-textSecondary">
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
