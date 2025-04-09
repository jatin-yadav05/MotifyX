import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiColorSwatch } from 'react-icons/hi'

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/50 backdrop-blur-xl relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
          <div className="flex items-center gap-2 mb-2">
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
            <p className="text-sm text-zinc-400 max-w-md">
              A curated collection of beautiful background patterns for modern web projects. 
              Free, open-source, and ready to use.
            </p>
            <a 
              href="https://www.producthunt.com/posts/motifyx?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-motifyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mt-6"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=950964&theme=dark&t=1744177379027" 
                alt="MotifyX - Transform your web designs with stunning background patterns | Product Hunt" 
                className="w-[250px] h-[54px] sm:w-[200px] sm:h-[43px] md:w-[220px] md:h-[47px] lg:w-[250px] lg:h-[54px]" 
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-zinc-400">
              <button 
                onClick={() => setActiveSection('geometric')} 
                className="hover:text-violet-400 text-left"
              >
                Geometric Patterns
              </button>
              <button 
                onClick={() => setActiveSection('futuristic')} 
                className="hover:text-violet-400 text-left"
              >
                Futuristic Patterns
              </button>
              <button 
                onClick={() => setActiveSection('patterns')} 
                className="hover:text-violet-400 text-left"
              >
                Dot Patterns
              </button>
              <button 
                onClick={() => setActiveSection('matrix')} 
                className="hover:text-violet-400 text-left"
              >
                Matrix Patterns
              </button>
              <button 
                onClick={() => setActiveSection('codescape')} 
                className="hover:text-violet-400 text-left"
              >
                Codescape Patterns
              </button>
              <button 
                onClick={() => setActiveSection('gradients')} 
                className="hover:text-violet-400 text-left"
              >
                Dark Gradients
              </button>
              <a 
                href="https://github.com/jatin-yadav05/MotifyX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 text-left"
              >
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/jatin-yadav05/MotifyX" 
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jatin-yadav05/" 
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} MotifyX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer 