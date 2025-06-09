import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-tr from-[color:var(--color-dark)] via-[#0a223a] to-[color:var(--color-primary)] text-white pt-16 pb-8 px-4 flex flex-col items-center overflow-hidden">
      {/* Glow animado de fundo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 w-[600px] h-[600px] -translate-x-1/2 bg-[color:var(--color-accent)]/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-[color:var(--color-primary)]/20 blur-2xl rounded-full animate-pulse-slow2" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Logo e nome */}
        <div className="flex items-center gap-3">
          <span className="font-primary text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent animate-gradient">
            Gradify
          </span>
        </div>

        {/* Links rápidos com animação */}
        <nav className="flex flex-wrap gap-8 font-primary text-base text-white/80">
          {[
            { href: "#about", label: "About" },
            { href: "#features", label: "Features" },
            { href: "#why-gradify", label: "Why Gradify" },
            { href: "#get-started", label: "Get Started" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition"
            >
              <span className="group-hover:text-white transition">{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[color:var(--color-accent)] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Newsletter/Early Access */}
        <form
          className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 shadow-inner border border-white/10 transition focus-within:ring-2 focus-within:ring-[color:var(--color-accent)]"
          onSubmit={e => { e.preventDefault(); }}
        >
          <HiMail className="text-lg text-[color:var(--color-accent)]" />
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent outline-none border-none text-white placeholder-white/60 px-2 py-1 font-primary text-sm w-32 md:w-40"
            required
          />
          <button
            type="submit"
            className="bg-[color:var(--color-accent)] hover:bg-[color:var(--color-primary)] text-white font-bold px-4 py-1 rounded-full transition"
          >
            Join
          </button>
        </form>
      </div>

      {/* Linha sutil animada */}
      <div className="relative w-full max-w-5xl h-px my-8 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/40 to-transparent animate-gradient-x" />
      </div>

      {/* Texto final */}
      <p className="relative z-10 text-xs text-white/60 font-primary text-center flex flex-col md:flex-row items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} Gradify. All rights reserved.
        </span>
        <span className="hidden md:inline mx-2">|</span>
        <span>
          Built on <span className="text-[color:var(--color-accent)] font-semibold">Stellar’s blockchain</span> infrastructure.
        </span>
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 6s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; transform: scale(1);}
            50% { opacity: 1; transform: scale(1.08);}
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          .animate-pulse-slow2 {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          @keyframes gradient-x {
            0% { background-position-x: 0%; }
            100% { background-position-x: 100%; }
          }
          .animate-gradient-x {
            background-size: 200% 100%;
            animation: gradient-x 8s linear infinite;
          }
        `}
      </style>
    </footer>
  );
}