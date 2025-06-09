export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#0a223a] via-[#12355b] to-[color:var(--color-dark)] overflow-hidden px-4">
      {/* Background image and particles */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/blockchain1.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.10)] to-transparent pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <svg className="w-full h-full animate-pulse" style={{ opacity: 0.13 }}>
            <circle cx="12%" cy="18%" r="2.5" fill="#fff" />
            <circle cx="78%" cy="32%" r="1.8" fill="#fff" />
            <circle cx="52%" cy="68%" r="3" fill="#fff" />
            <circle cx="62%" cy="12%" r="1.2" fill="#fff" />
            <circle cx="28%" cy="82%" r="2" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center gap-6 mt-10">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight font-primary bg-gradient-to-r from-white via-[color:var(--color-accent)] to-[color:var(--color-primary)] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientMove 4s ease-in-out infinite'
          }}
        >
          Transforming Academic Credentials
        </h1>
        <h2
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[color:var(--color-primary)] via-white to-[color:var(--color-secondary)] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] animate-gradient"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientMove 6s ease-in-out infinite'
          }}
        >
          Scholarships & Trust. Reinvented.
        </h2>
        <p className="text-lg md:text-xl font-light text-white/90 max-w-xl text-center mt-2">
          Gradify delivers secure academic credentials and transparent scholarships powered by blockchain and smart contracts.
        </p>
        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-2 text-lg md:text-xl font-semibold py-3 px-10 rounded-full bg-gradient-to-r from-[color:var(--color-secondary)] to-[color:var(--color-primary)] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_4px_var(--color-primary)] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[color:var(--color-primary)]/40"
        >
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Learn More</span>
        </a>
      </div>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}