export default function SectionHeader({ title, accent = "neonPurple" }: { title: string; accent?: "neonPurple" | "neonBlue" }) {
  return (
    <h1 className={`text-3xl md:text-4xl font-bold mb-8 text-${accent} drop-shadow-[0_0_8px_var(--tw-color-${accent})]`}>
      {title}
    </h1>
  );
}
