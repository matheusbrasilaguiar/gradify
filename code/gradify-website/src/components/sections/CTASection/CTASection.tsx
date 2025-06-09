import { HiMail, HiCheckCircle } from "react-icons/hi";
import { useState, useRef } from "react";

export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0, show: false });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  function handleMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      show: true,
    });
  }

  function handleMouseLeave() {
    setMouse((m) => ({ ...m, show: false }));
  }

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-r from-[color:var(--color-secondary)] via-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex items-center justify-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white/90 rounded-3xl shadow-2xl px-8 py-14 max-w-2xl w-full flex flex-col items-center text-center border border-[color:var(--color-primary)]/10 relative overflow-hidden"
        style={{ position: "relative" }}
      >
        {/* Badge */}
        <span className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)] font-semibold text-sm tracking-wide">
          <HiMail className="text-lg" /> Early Access
        </span>
        {/* Título com destaque */}
        <h2 className="text-4xl md:text-5xl font-black font-primary mb-4 text-[color:var(--color-dark)]">
          Join the <span className="text-[color:var(--color-primary)]">Waitlist</span>
        </h2>
        <p className="text-lg max-w-xl mb-8 text-[color:var(--color-dark)]">
          Sign up now to get early access to <span className="font-bold text-[color:var(--color-secondary)]">Gradify</span> and be part of the movement to make education transparent and accessible for everyone.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-primary)] text-xl pointer-events-none">
              <HiMail />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 rounded-full text-[color:var(--color-dark)] placeholder-gray-400 border border-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/30 outline-none transition"
              required
              disabled={sent}
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className={`px-8 py-3 rounded-full bg-[color:var(--color-primary)] text-white font-semibold shadow-lg transition-all duration-200
              hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[color:var(--color-secondary)]/40
              ${sent ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            {sent ? (
              <span className="flex items-center gap-2 justify-center">
                <HiCheckCircle className="text-xl" /> Sent!
              </span>
            ) : (
              "Join"
            )}
          </button>
        </form>
        {/* Mouse-following gradient */}
        {mouse.show && (
          <div
            className="pointer-events-none absolute"
            style={{
              left: mouse.x - 100,
              top: mouse.y - 100,
              width: 200,
              height: 200,
              background: "radial-gradient(circle at center, var(--color-primary) 0%, var(--color-accent) 40%, transparent 80%)",
              opacity: 0.18,
              borderRadius: "9999px",
              pointerEvents: "none",
              transition: "opacity 0.2s",
              zIndex: 20,
            }}
          />
        )}
      </div>
    </section>
  );
}