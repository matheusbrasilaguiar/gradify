import { HiMail, HiCheckCircle } from "react-icons/hi";
import { useState, useRef } from "react";

export default function CTASection() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);

    // Substitua pela URL do seu webhook do Zapier
    await fetch("https://hooks.zapier.com/hooks/catch/23321173/uyi4wkj/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setTimeout(() => setSent(false), 2500);
    setEmail("");
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 px-4 md:px-4 bg-gradient-to-r from-[color:var(--color-secondary)] via-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex items-center justify-center">
      <div
        ref={cardRef}
        className="bg-white/90 rounded-2xl md:rounded-3xl shadow-2xl px-4 md:px-8 py-8 md:py-14 max-w-full md:max-w-2xl w-full flex flex-col items-center text-center border border-[color:var(--color-primary)]/10 relative overflow-hidden"
        style={{ position: "relative" }}
      >
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
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-xs sm:max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-primary)] text-lg md:text-xl pointer-events-none">
              <HiMail />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 rounded-full text-[color:var(--color-dark)] placeholder-gray-400 border border-[color:var(--color-primary)]/20 focus:border-[color:var(--color-primary)] focus:ring-2 focus:ring-[color:var(--color-primary)]/30 outline-none transition text-sm md:text-base"
              required
              disabled={sent}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-[color:var(--color-primary)] text-white font-semibold shadow-lg transition-all duration-200
              hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[color:var(--color-secondary)]/40
              ${sent ? "opacity-60 cursor-not-allowed" : ""}
            `}
          >
            {sent ? (
              <span className="flex items-center gap-2 justify-center">
                <HiCheckCircle className="text-lg md:text-xl" /> Sent!
              </span>
            ) : (
              "Join"
            )}
          </button>
        </form>
        {/* ... */}
      </div>
    </section>
  );
}