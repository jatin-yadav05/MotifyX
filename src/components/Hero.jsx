const Hero = ({ scrollToPatterns }) => {
  return (
    <div className="relative pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 hover:border-violet-500/50 transition-all duration-300">
          <HiSparkles className="text-violet-400 animate-pulse" />
          <span className="text-sm">6 unique pattern categories</span>
          <span className="text-white/50">•</span>
          <span className="text-zinc-400 text-sm">100+ customizable designs</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Transform your<br />
          <CustomGlitchText 
            text="backgrounds" 
            className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600"
          />
          effortlessly
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8">
          Discover a curated collection of unique background patterns, from subtle geometric designs 
          to dynamic code-inspired landscapes. Each pattern is crafted with precision, featuring
          <span className="text-violet-400"> live customization</span>, 
          <span className="text-violet-400"> real-time previews</span>, and 
          <span className="text-violet-400"> instant CSS generation</span>.
        </p>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={scrollToPatterns}
            className="group bg-violet-500 text-white px-6 py-2.5 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 font-medium flex items-center gap-2"
          >
            Browse Collection
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </button>
          <a 
            href="https://github.com/jatin-yadav05/MotifyX"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white/5 px-6 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-violet-500/50"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero 