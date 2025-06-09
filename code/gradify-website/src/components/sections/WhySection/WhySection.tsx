import { HiBadgeCheck, HiGlobeAlt, HiShieldCheck, HiPuzzle, HiUserGroup, HiLightBulb } from "react-icons/hi";

const icons = [
  HiBadgeCheck,
  HiGlobeAlt,
  HiShieldCheck,
  HiPuzzle,
  HiUserGroup,
  HiLightBulb,
];

const benefits = [
  {
    title: 'Immutable Credentials',
    description: 'Academic records protected and permanent on blockchain.',
  },
  {
    title: 'Global Scholarships',
    description: 'Transparent funding for students worldwide.',
  },
  {
    title: 'Trust & Transparency',
    description: 'Guaranteed trust and honesty, no fraud.',
  },
  {
    title: 'Seamless Integration',
    description: 'Effortless integration with institutional systems.',
  },
  {
    title: 'Student-Centric Approach',
    description: 'Accessibility and inclusion for every student.',
  },
  {
    title: 'Future-Proof Technology',
    description: 'Blockchain foundation ready for the future of education.',
  },
];

export default function WhySection() {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#f8fafc] to-[#e0e7ef] py-28 px-4 overflow-hidden"
      id="why-gradify"
    >
      {/* Subtle animated grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.13 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#b6c6e3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Title */}
      <div className="mb-12 text-center z-10">
        <span className="uppercase tracking-widest text-sm font-semibold text-[color:var(--color-primary)]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Why choose
        </span>
        <h2
          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(0,0,0,0.10)] animate-gradient mt-2"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientMove 6s ease-in-out infinite',
            fontFamily: 'Amenti, sans-serif'
          }}
        >
          Gradify?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[color:var(--color-dark)]/80 font-light max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
          A platform that combines security, transparency, and global opportunities to transform academic futures.
        </p>
      </div>

      {/* Cards */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {benefits.map((benefit, index) => {
          const Icon = icons[index % icons.length];
          const isSpotlight = index === 2;
          return (
            <div
              key={index}
              className={`
                group relative bg-white/50 border border-white/30 rounded-3xl p-10 shadow-xl
                flex flex-col items-center gap-6 backdrop-blur-2xl transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl hover:border-[color:var(--color-primary)]/30
                focus-visible:ring-4 focus-visible:ring-[color:var(--color-primary)]/30
                ${isSpotlight
                  ? 'lg:scale-105 lg:hover:scale-110 lg:shadow-2xl lg:border-[color:var(--color-accent)]/40'
                  : 'hover:scale-105'
                }
                animate-fadeUp
              `}
              style={{
                minHeight: 320,
                animationDelay: `${index * 120}ms`,
                animationFillMode: 'both',
              }}
              tabIndex={0}
            >
              {/* Highlight on top */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-2/3 h-2 rounded-b-2xl bg-gradient-to-r from-[color:var(--color-primary)]/30 via-[color:var(--color-accent)]/20 to-[color:var(--color-secondary)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[color:var(--color-primary)]/20 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/20 mb-2 group-hover:scale-110 transition-transform shadow-lg ring-2 ring-white/40">
                <Icon className="text-5xl text-[color:var(--color-primary)] drop-shadow-lg transition-colors duration-300 group-hover:text-[color:var(--color-accent)]" />
              </div>
              <h3
                className="text-2xl font-bold text-[color:var(--color-dark)] text-center tracking-tight"
                style={{ fontFamily: 'Amenti, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-base md:text-lg text-[color:var(--color-dark)]/90 text-center font-light"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {benefit.description}
              </p>
              {/* Subtle glass border highlight */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/30 group-hover:border-[color:var(--color-accent)]/30 transition-colors duration-300" />
            </div>
          );
        })}
      </div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-[color:var(--color-primary)]/20 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/20 rounded-full" />
      </div>

      {/* Gradient animation and fadeUp */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeUp {
            animation: fadeUp 0.8s cubic-bezier(.4,0,.2,1) both;
          }
        `}
      </style>
    </section>
  );
}