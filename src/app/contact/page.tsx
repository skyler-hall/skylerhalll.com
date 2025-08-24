import SectionHeader from "../_components/SectionHeader";

export default function Contact() {
  return (
    <section className="py-12 animate-fade-in">
      <SectionHeader title="Contact" accent="neonPurple" />
      <form className="flex flex-col gap-4 max-w-md mx-auto bg-background border border-neonBlue rounded-xl p-6 shadow-lg">
        <input type="text" placeholder="Name" className="bg-background border border-neonBlue rounded px-4 py-2 text-foreground" />
        <input type="email" placeholder="Email" className="bg-background border border-neonPurple rounded px-4 py-2 text-foreground" />
        <textarea placeholder="Message" className="bg-background border border-neonBlue rounded px-4 py-2 text-foreground" rows={4} />
        <button type="submit" className="bg-neonPurple text-background font-bold py-2 rounded hover:bg-neonBlue transition">Send</button>
      </form>
      <div className="mt-8 flex justify-center gap-8">
        <a href="https://linkedin.com/in/skyler-hall" target="_blank" rel="noopener" className="text-neonBlue underline">LinkedIn</a>
        <a href="https://github.com/skyler-hall" target="_blank" rel="noopener" className="text-neonPurple underline">GitHub</a>
      </div>
    </section>
  );
}
