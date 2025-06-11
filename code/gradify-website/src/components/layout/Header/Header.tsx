import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile ao navegar
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function closeMenu() {
      setMobileMenuOpen(false);
    }
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl"
          : "bg-transparent"}
      `}
      style={{
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(60, 60, 120, 0.10), 0 1.5px 6px 0 var(--color-accent, #7c3aed)"
          : "none",
        borderBottom: scrolled ? "1.5px solid rgba(120,120,180,0.08)" : "none",
      }}
    >
      {/* Glow animado de fundo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute left-1/2 top-0 w-[400px] h-[200px] -translate-x-1/2 blur-2xl rounded-full animate-pulse-slow
          ${scrolled ? "bg-[color:var(--color-accent)]/10" : "bg-[color:var(--color-accent)]/0"}
        `} />
        <div className={`absolute right-0 bottom-0 w-[180px] h-[180px] blur-2xl rounded-full animate-pulse-slow2
          ${scrolled ? "bg-[color:var(--color-primary)]/10" : "bg-[color:var(--color-primary)]/0"}
        `} />
      </div>
      <div className="relative flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 w-full max-w-7xl mx-auto">
        {/* Logo com ícone animado */}
        <div className="flex items-center gap-3">
          <span className="font-primary text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent animate-gradient">
            Gradify
          </span>
        </div>

        {/* Botão menu mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none z-20"
          aria-label="Abrir menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-[color:var(--color-accent)] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[color:var(--color-accent)] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-[color:var(--color-accent)] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* Links principais desktop */}
        <nav className="hidden md:flex gap-8 font-primary text-base"
          style={{
            color: scrolled ? "var(--color-dark)" : "white",
            transition: "color 0.3s"
          }}
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#features", label: "Features" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`relative group transition font-semibold px-2 py-1 rounded
                ${scrolled
                  ? "hover:bg-[color:var(--color-accent)]/10 hover:text-[color:var(--color-accent)]"
                  : "hover:bg-white/10 hover:text-white"}
              `}
              style={{
                transition: "background 0.2s, color 0.2s"
              }}
            >
              <span className="transition">{link.label}</span>
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[color:var(--color-accent)] transition-all group-hover:w-full
                ${scrolled ? "" : "bg-white/70"}
              `} />
            </a>
          ))}
        </nav>

        <a
          href="#get-started"
          className={`ml-6 hidden md:inline-block font-semibold py-2.5 px-7 rounded-full text-white bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-primary)] to-[color:var(--color-secondary)] shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 font-primary animate-gradient border border-white/20
            ${scrolled ? "" : "backdrop-blur-md"}
          `}
          style={{
            boxShadow: scrolled
              ? "0 4px 24px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 var(--color-accent, #7c3aed)"
              : "0 2px 12px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 var(--color-accent, #7c3aed)",
          }}
        >
          Get Started
        </a>

        {/* Menu mobile */}
        <nav
          className={`
            fixed md:hidden top-0 right-0 h-screen w-4/5 max-w-xs bg-white/95 backdrop-blur-xl shadow-2xl z-40 transition-transform duration-300
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
            flex flex-col gap-8 pt-24 px-8
          `}
          style={{
            color: "var(--color-dark)",
          }}
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#features", label: "Features" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-lg py-2 px-2 rounded hover:bg-[color:var(--color-accent)]/10 hover:text-[color:var(--color-accent)] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="mt-4 font-semibold py-3 px-7 rounded-full text-white bg-gradient-to-r from-[color:var(--color-accent)] via-[color:var(--color-primary)] to-[color:var(--color-secondary)] shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 font-primary animate-gradient border border-white/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>

        {/* Overlay para fechar menu mobile */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          />
        )}
      </div>
      {/* Linha animada sutil abaixo do header só quando scrolled */}
      {scrolled && (
        <div className="relative w-full h-px z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--color-accent)]/40 to-transparent animate-gradient-x" />
        </div>
      )}
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
    </header>
  );
}