export default function Hero() {
  return (
    <section className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center animate-fade-in bg-background">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-neonBlue drop-shadow-[0_0_24px_#a259ff] tracking-tight">Skyler Hall</h1>
      <p className="text-2xl md:text-3xl text-foreground mb-6 max-w-3xl font-medium">Computer Science student at Florida International University, graduating December 2026.</p>
      <p className="text-xl text-foreground mb-8 max-w-2xl">Software Engineer Intern, Google Tech Exchange, Management Leadership for Tomorrow.<br />Passionate about impactful software and diverse teams.</p>
      <div className="mt-10 flex gap-8 justify-center">
        <a href="/projects" className="px-8 py-4 rounded-xl bg-neonPurple text-background font-bold text-2xl shadow-lg hover:bg-neonBlue transition-all duration-200">View Projects</a>
        <a href="/contact" className="px-8 py-4 rounded-xl border-2 border-neonBlue text-neonBlue font-bold text-2xl hover:bg-neonBlue hover:text-background transition-all duration-200">Contact Me</a>
      </div>
    </section>
  );
}
