export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-sectionVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto px-6 pt-30 md:px-12 h-full flex flex-col justify-center">
        {/* Description */}
        <h3 className="text-2xl md:text-5xl lg:text-5xl font-light leading-tight max-w-2xl font-poppins ">
          We unite top freelancers under one roof — flexible, fast, escrow-protected.
        </h3>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-[20px] font-medium font-poppins hover:bg-yellow-400 hover:text-black transition-all active:scale-95">
            Start your project
          </button>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-[20px] font-medium font-poppins hover:bg-yellow-500 transition-all active:scale-95">
            Apply as a freelancer
          </button>
        </div>

        {/* Headlines */}
        <div className="mt-16 md:mt-16 lg:mt-16">
          <h2 className="text-[24px] md:text-[50px] lg:text-[50px] tracking-[0.2em] text-white font-medium uppercase">
            Your On-Demand
          </h2>
          <h1 className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[190px] font-bold text-yellow-400 leading-[0.8] tracking-tighter uppercase">
            Freelancer
          </h1>
        </div>
      </div>

      {/* AGENCY TEXT: Positioned to the far right, reading bottom-to-top */}
      <div className="hidden lg:flex absolute top-0 h-full items-center pointer-events-none z-20"
        style={{ right:"-150px"}}
      >
        <h2 
          className="font-black uppercase select-none lg:text-[150px] xl:text-[180px] leading-none"
          style={{ 
            WebkitTextStroke: "2px #FFC700", 
            color: "transparent",
            /* -90deg starts the 'A' at the bottom. 
               translateX(30%) pushes it slightly off-screen for that design bleed effect. */
            transform: "rotate(-90deg) translateX(0) translateY(30%)",
            opacity: 0.6
          }}
        >
          AGENCY
        </h2>
      </div>

      {/* Mobile Agency: Keeping it safe/horizontal to avoid horizontal scroll bugs */}
      {/*<div className="lg:hidden absolute bottom-10 left-6 opacity-30">
         <h2 className="text-[45px] font-black text-yellow-400 uppercase tracking-widest"
             style={{ WebkitTextStroke: "1px #FFC700", color: "transparent" }}>
           AGENCY
         </h2>
      </div>*/}
    </section>
  );
}