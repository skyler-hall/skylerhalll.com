
export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-4 text-accentPurple">Skyler Hall</h1>
      <p className="text-xl text-textSecondary mb-6">Computer Science Student @ Florida International University</p>
      <p className="mb-4 text-textPrimary">Graduating December 2026</p>
      <div className="space-y-4">
        <p className="text-textPrimary">I am passionate about building impactful software and collaborating with diverse teams. My experience includes a Software Engineer Internship at Vanguard, and participation in professional development programs such as Google Tech Exchange and Management Leadership for Tomorrow.</p>
        <p className="text-textPrimary">I thrive in fast-paced environments and enjoy learning new technologies to solve real-world problems.</p>
      </div>
      <div className="mt-8 flex gap-4">
        <span className="px-3 py-1 rounded bg-accentBlue text-background font-semibold">Software Engineer Intern</span>
        <span className="px-3 py-1 rounded bg-accentPurple text-background font-semibold">Google Tech Exchange</span>
        <span className="px-3 py-1 rounded bg-accentPurple text-background font-semibold">MLT</span>
      </div>
    </section>
  );
}
