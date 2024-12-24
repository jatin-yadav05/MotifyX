import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-950/50 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-violet-500/20 blur-xl group-hover:bg-violet-500/30 transition-colors duration-300 rounded-lg" />
              <div className="relative bg-black/50 p-2 rounded-lg border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                <svg className="w-5 h-5 text-violet-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                  <path d="M4 4l8 8m0 0l8 8M20 4l-8 8m0 0l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="font-semibold text-lg">Motify<span className="text-violet-400">X</span></span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/jatin-yadav05/MotifyX" 
              className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-105 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jatin-yadav05/" 
              className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-105 duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 