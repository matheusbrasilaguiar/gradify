export default function AboutSection() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-white via-[#f8fafc] to-[#e0e7ef] overflow-hidden"
      id="about"
    >
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl px-6 md:px-20 py-24 md:py-40 gap-16 md:gap-24 items-center z-10">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 text-left">
          <span className="uppercase tracking-widest text-sm font-semibold text-[color:var(--color-primary)] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Mission
          </span>
          <h2
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[color:var(--color-primary)] via-[color:var(--color-accent)] to-[color:var(--color-secondary)] bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(0,0,0,0.08)] animate-gradient"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradientMove 6s ease-in-out infinite',
              fontFamily: 'Amenti, sans-serif'
            }}
          >
            About Gradify
          </h2>
          <p
            className="text-lg md:text-xl font-light text-[color:var(--color-dark)]/90 max-w-xl leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            At Gradify, we believe in a future where education is secure and accessible. 
            With blockchain technology, we offer a transparent and reliable platform that unites 
            institutions, donors, and students around the world — empowering growth 
            and fostering trust in education.
          </p>
        </div>

        {/* Premium image effect */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/60 hover:scale-105 transition-transform duration-500">
            <img
              src="/assets/school.jpeg"
              alt="About Gradify"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.98) saturate(1.1)' }}
            />
          </div>
        </div>
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