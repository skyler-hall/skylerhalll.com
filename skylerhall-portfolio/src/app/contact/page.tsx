export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-accentPurple">Contact</h1>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded bg-background border border-accentPurple/30 text-textPrimary focus:border-accentBlue outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-background border border-accentPurple/30 text-textPrimary focus:border-accentBlue outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 rounded bg-background border border-accentPurple/30 text-textPrimary focus:border-accentBlue outline-none"
          rows={4}
        />
        <button
          type="submit"
          className="bg-accentPurple text-background px-4 py-2 rounded font-semibold hover:bg-accentBlue transition-colors"
        >
          Send
        </button>
      </form>
      <div className="mt-8 flex gap-6">
        <a
          href="https://www.linkedin.com/in/skylerhalll/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentBlue hover:text-accentPurple text-lg underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/skyler-hall"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentBlue hover:text-accentPurple text-lg underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
