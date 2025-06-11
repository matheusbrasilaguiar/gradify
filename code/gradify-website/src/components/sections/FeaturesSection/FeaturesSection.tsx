import {
  HiAcademicCap,
  HiClipboardCheck,
  HiCurrencyDollar,
  HiViewGrid,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi";
import { motion } from "framer-motion";

const icons = [
  HiAcademicCap,
  HiClipboardCheck,
  HiCurrencyDollar,
  HiViewGrid,
  HiShieldCheck,
  HiChartBar,
];

const features = [
  {
    title: "Immutable Academic Records",
    description:
      "Permanent, blockchain-secured academic credentials for lifelong recognition.",
  },
  {
    title: "Scholarship Programs",
    description:
      "Simple, transparent tools to create, manage, and award scholarships globally.",
  },
  {
    title: "Transparent Donations",
    description:
      "On-chain tracking for donors to support students and measure impact.",
  },
  {
    title: "Student Dashboard",
    description:
      "A personalized dashboard to view, apply, and track academic progress and opportunities.",
  },
  {
    title: "Blockchain Security",
    description:
      "Tamper-proof storage and verification powered by Stellar blockchain.",
  },
  {
    title: "Real-time Insights",
    description:
      "Dashboards for donors and institutions to monitor adoption and outcomes.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="w-full py-12 md:py-24 px-4 bg-gradient-to-br from-white via-[#f8fafc] to-[#e0e7ef] relative overflow-hidden"
      id="features"
    >
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

      <div className="mb-8 md:mb-12 lg:mb-18 text-center z-10">
        <span className="uppercase tracking-widest text-xs md:text-sm font-semibold text-[color:var(--color-primary)]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Explore
        </span>
        <h2
          className="lg:mb-6 lg:mt-4 text-2xl md:text-5xl font-black bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(0,0,0,0.10)] animate-gradient mt-2"
          style={{
            backgroundSize: '200% 200%',
            animation: 'gradientMove 6s ease-in-out infinite',
            fontFamily: 'Amenti, sans-serif'
          }}
        >
          Platform Features
        </h2>
        <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-xl text-[color:var(--color-dark)]/80 font-light max-w-6xl mx-auto px-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          A suite of features designed for transparency, security, and global reach.
        </p>
      </div>

      <motion.div
        className="hidden md:block absolute left-1/2 z-0 w-1 rounded-full pointer-events-none"
        style={{
          top: "320px",
          height: "calc(100% - 320px - 120px)",
          background: "linear-gradient(180deg, transparent 0%, var(--color-primary) 15%, var(--color-accent) 50%, var(--color-secondary) 85%, transparent 100%)",
          filter: "blur(1.5px)",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-4xl mx-auto flex flex-col gap-10 md:gap-16 lg:gap-20 z-10">
        {features.map((feature, idx) => {
          const Icon = icons[idx % icons.length];
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className="relative flex flex-col md:flex-row items-center w-full min-h-[100px] md:min-h-[120px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white via-[#f8fafc] to-[#e0e7ef] rounded-full blur-[6px] z-10" />
              
              <div
                className="z-30 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[color:var(--color-primary)]/20 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/20 shadow-lg ring-4 ring-white/60 mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 transition-transform hover:scale-110"
              >
                <Icon className="text-xl md:text-2xl lg:text-3xl text-[color:var(--color-primary)] drop-shadow-lg transition-colors duration-300 hover:text-[color:var(--color-accent)]" />
              </div>

              <div
                className={`
                  relative bg-white/60 border border-white/40 rounded-2xl md:rounded-3xl backdrop-blur-sm md:backdrop-blur-2xl
                  shadow-md md:shadow-xl px-5 py-5 md:px-7 md:py-7 flex flex-col w-full max-w-[320px] md:max-w-md mx-auto
                  text-center transition-all duration-300 z-20
                  items-center
                  ${isLeft ? "md:items-end md:text-right md:mr-[calc(50%+2.5rem)]" : "md:items-start md:text-left md:ml-[calc(50%+2.5rem)]"}
                  hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-lg md:hover:shadow-2xl hover:border-[color:var(--color-primary)]/40
                `}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-[color:var(--color-dark)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm lg:text-base text-[color:var(--color-dark)]/90 font-light">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none border border-white/40 hover:border-[color:var(--color-accent)]/30 transition-colors duration-300" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-[color:var(--color-primary)]/20 via-[color:var(--color-accent)]/10 to-[color:var(--color-secondary)]/20 rounded-full" />
      </div>

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
          
          @media (max-width: 768px) {
            .backdrop-blur-sm {
              backdrop-filter: blur(4px);
            }
          }
        `}
      </style>
    </section>
  );
}