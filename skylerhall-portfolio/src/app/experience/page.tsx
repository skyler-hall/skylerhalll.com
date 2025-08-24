export default function Experience() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-accentPurple">Experience</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-accentBlue">Software Engineer Intern, Vanguard</h2>
          <ul className="list-disc ml-6 text-textSecondary">
            <li>Co-developed a full-stack Appian tool for business process automation.</li>
            <li>Designed a centralized dashboard with real-time status updates.</li>
            <li>Developed a user-facing intake app to standardize request submissions across departments.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-accentBlue">Teaching Assistant, Programming 2 (Java)</h2>
          <ul className="list-disc ml-6 text-textSecondary">
            <li>Assisted students with Java programming concepts and assignments.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-accentBlue">STEM Instructor</h2>
          <ul className="list-disc ml-6 text-textSecondary">
            <li>Taught JavaScript and Python to middle and high school students.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
