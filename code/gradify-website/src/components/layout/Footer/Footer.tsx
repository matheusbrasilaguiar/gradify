export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-tr from-[color:var(--color-dark)] via-[#0a223a] to-[color:var(--color-primary)] text-white pt-10 md:pt-16 pb-6 md:pb-8 px-2 md:px-4 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] -translate-x-1/2 bg-[color:var(--color-accent)]/10 blur-3xl rounded-full animate-pulse-slow" />
        <div className="absolute right-0 bottom-0 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-[color:var(--color-primary)]/20 blur-2xl rounded-full animate-pulse-slow2" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex items-center gap-3 mb-2 justify-center w-full">
          <span className="font-primary text-2xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent animate-gradient">
            Gradify
          </span>
        </div>

        <nav className="flex flex-wrap justify-center mb-2 gap-6 font-primary text-base text-white/80 w-full">
          {[
            { href: "#about", label: "About" },
            { href: "#features", label: "Features" },
            { href: "#why-gradify", label: "Why Gradify" },
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
      </div>

      <div className="relative w-full max-w-5xl h-px my-8 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/40 to-transparent animate-gradient-x" />
      </div>

      <p className="relative z-10 text-xs text-white/60 font-primary text-center flex flex-col md:flex-row items-center gap-2">
        <span>
          &copy; {new Date().getFullYear()} Gradify. All rights reserved.
        </span>
        <span className="hidden md:inline mx-2">|</span>
        <span>
          Built on <span className="text-[color:var(--color-accent)] font-semibold">Stellar’s blockchain</span> infrastructure.
        </span>
      </p>

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