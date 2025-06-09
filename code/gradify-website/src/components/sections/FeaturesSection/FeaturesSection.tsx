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
    title: "Immutable Academic Credentials",
    description:
      "Institutions can issue tamper-proof, blockchain-based certificates and diplomas with QR verification.",
  },
  {
    title: "Scholarship Management",
    description:
      "Intuitive tools for institutions to create, manage, and approve scholarship programs with transparency.",
  },
  {
    title: "Transparent Donations",
    description:
      "Donors can directly support students and institutions, with on-chain tracking and impact insights.",
  },
  {
    title: "Student-Centric Dashboard",
    description:
      "Students get a personalized dashboard to view and apply for scholarships and track their credentials.",
  },
  {
    title: "Blockchain Security & Verification",
    description:
      "All credentials and transactions are stored immutably on the Stellar blockchain, ensuring authenticity.",
  },
  {
    title: "Impactful Data & Analytics",
    description:
      "Dashboards for institutions and donors to visualize real-time metrics, adoption rates, and outcomes.",
  },
];

export default function FeaturesSection() {
  return (
    // ...existing code...
// ...existing code...
    <section
      className="w-full py-24 px-4 bg-gradient-to-b from-white via-[color:var(--color-primary)]/5 to-white relative overflow-hidden"
      id="features"
    >
      {/* Linha central premium animada com pontos pulsantes */}
      <motion.div
        className="absolute left-1/2 z-0 w-1 rounded pointer-events-none"
        style={{
          top: "110px", // Ajuste aqui para descer a linha (ex: 110px, pode ajustar conforme o tamanho do seu título)
          height: "calc(100% - 110px)", // Mantém a linha até o final da seção
          background: "linear-gradient(180deg, var(--color-primary), var(--color-accent) 50%, var(--color-secondary) 85%, transparent 100%)",
          filter: "blur(1.5px) drop-shadow(0 0 12px var(--color-accent))",
          backgroundSize: "100% 300%",
          backgroundPosition: "0% 0%",
          boxShadow: "0 0 32px 4px var(--color-accent)/30",
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
      >
        {/* Pontos pulsantes para cada feature */}
        {features.map((_, idx) => (
          <motion.span
            key={idx}
            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[color:var(--color-accent)]/80 shadow-lg"
            style={{
              top: `calc(${(idx + 1) / (features.length + 1) * 100}% - 10px)`,
              border: "2px solid white",
            }}
            initial={{ scale: 0.7, opacity: 0.7 }}
            whileInView={{ scale: 1.15, opacity: 1 }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + idx * 0.2,
              delay: idx * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      {/* Fade no topo para não passar por cima do título */}
      <div className="absolute left-1/2" style={{
        top: "110px",
        width: "40px",
        height: "96px",
        zIndex: 10,
        pointerEvents: "none",
        background: "linear-gradient(to bottom, white 80%, transparent 100%)",
        transform: "translateX(-50%)"
      }} />
      {/* Fade no final da linha */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-10 h-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, white 80%, transparent 100%)",
        }}
      />
      <h2 className="text-4xl md:text-5xl font-black font-primary text-[color:var(--color-dark)] mb-20 text-center relative z-20">
        Platform Features
      </h2>
      <div className="relative max-w-4xl mx-auto flex flex-col gap-20">
        {features.map((feature, idx) => {
          const Icon = icons[idx % icons.length];
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              className="relative flex items-center w-full min-h-[120px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              {/* Ícone animado */}
              <motion.div
                className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[color:var(--color-primary)]/90 shadow-lg border-4 border-white absolute left-1/2 -translate-x-1/2"
                whileHover={{ scale: 1.13, boxShadow: "0 0 32px 0 var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="text-white text-3xl transition-colors duration-300" />
              </motion.div>
              {/* Card de feature com hover animado */}
              <motion.div
                className={`
                  relative bg-white rounded-2xl shadow-xl px-8 py-8 flex flex-col
                  ${isLeft ? "items-end text-right mr-[calc(50%+2.5rem)]" : "items-start text-left ml-[calc(50%+2.5rem)]"}
                  max-w-md w-full border border-[color:var(--color-primary)]/10
                  group-hover:shadow-2xl transition-all duration-300
                `}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12)",
                  backgroundColor: "rgba(255,255,255,0.98)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h3 className="text-xl font-bold text-[color:var(--color-dark)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-[color:var(--color-dark)]">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      {/* Partículas animadas no fundo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Adicione aqui SVGs ou canvas de partículas animadas */}
      </div>
    </section>
  );
}