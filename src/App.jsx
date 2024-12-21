import React, { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiSparkles, HiCode, HiClipboard, HiEye, HiColorSwatch, HiX, HiCheck, HiRefresh, HiPlay, HiPause, HiChevronUp, HiSelector } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'


// Rename the component to CustomGlitchText
const CustomGlitchText = ({ text, className = "" }) => {
  return (
    <div className="relative inline-block">
      {/* Main Text */}
      <span className={`relative z-10 ${className}`}>
        {text}
      </span>

      {/* Animated Glowing Line */}
      <div className="absolute -bottom-3 left-0 right-0">
        {/* Base glow layers */}
        <div className="h-[3px] bg-violet-400/70 blur-md animate-glow" />
        <div className="h-[3px] bg-white/50 blur-sm animate-glow-wide" />
        
        {/* Moving highlight */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-[30%] bg-gradient-to-r from-transparent via-violet-300/80 to-transparent blur-md animate-slide" />
        </div>

        {/* Extra glow effect */}
        <div className="absolute inset-0 bg-violet-500/20 blur-xl animate-pulse-subtle" />
      </div>
    </div>
  );
};

function App() {
  const [selectedPattern, setSelectedPattern] = useState(null)
  const [showCopyNotification, setShowCopyNotification] = useState(false)
  const [customColors, setCustomColors] = useState({})
  const [isAnimationPaused, setIsAnimationPaused] = useState(false)
  const [isAppliedToPage, setIsAppliedToPage] = useState(false)
  const [activeSection, setActiveSection] = useState('geometric')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropupRef = useRef(null)
  
  const patterns = [
    {
      id: 1,
      name: 'Neural Mesh',
      category: 'futuristic',
      description: 'Subtle neural network visualization',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(128, 103, 243, 0.05) 0%, transparent 25%),
          radial-gradient(circle at 0% 0%, rgba(128, 103, 243, 0.025) 0%, transparent 30%),
          radial-gradient(circle at 100% 100%, rgba(128, 103, 243, 0.05) 0%, transparent 25%),
          linear-gradient(45deg, transparent 48%, rgba(128, 103, 243, 0.02) 49%, rgba(128, 103, 243, 0.02) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(128, 103, 243, 0.02) 49%, rgba(128, 103, 243, 0.02) 51%, transparent 52%)
        `,
        backgroundSize: '60px 60px, 60px 60px, 60px 60px, 30px 30px, 30px 30px',
        animation: 'neuralPulse 10s ease infinite'
      }
    },
    {
      id: 2,
      name: 'Data Flow',
      category: 'futuristic',
      description: 'Dynamic data stream effect',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, 
            rgba(128, 103, 243, 0.03) 25%, 
            rgba(128, 103, 243, 0.03) 26%, 
            transparent 27%, 
            transparent 74%, 
            rgba(128, 103, 243, 0.03) 75%, 
            rgba(128, 103, 243, 0.03) 76%, 
            transparent 77%),
          linear-gradient(90deg, transparent 24%, 
            rgba(128, 103, 243, 0.03) 25%, 
            rgba(128, 103, 243, 0.03) 26%, 
            transparent 27%, 
            transparent 74%, 
            rgba(128, 103, 243, 0.03) 75%, 
            rgba(128, 103, 243, 0.03) 76%, 
            transparent 77%)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 25px 25px',
        animation: 'dataFlow 20s linear infinite'
      }
    },
    {
      id: 3,
      name: 'Quantum Grid',
      category: 'futuristic',
      description: 'Ethereal quantum computing inspired',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(to right, rgba(128, 103, 243, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128, 103, 243, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 50% 50%, rgba(128, 103, 243, 0.05) 0%, transparent 100%),
          radial-gradient(circle at 0% 100%, rgba(128, 103, 243, 0.025) 0%, transparent 50%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 200px 200px, 400px 400px',
        animation: 'quantumShift 15s ease infinite'
      }
    },
    {
      id: 4,
      name: 'Gradient Mesh',
      category: 'gradients',
      description: 'Smooth transitioning colors',
      style: {
        backgroundColor: '#e5e5f7',
        backgroundImage: 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)',
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }
    },
    {
      id: 5,
      name: 'Neural Grid',
      category: 'geometric',
      description: 'Modern line patterns',
      style: {
        backgroundColor: 'rgba(15, 15, 15, 1)',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }
    },
    {
      id: 6,
      name: 'Cosmic Dots',
      category: 'patterns',
      description: 'Subtle dot matrix',
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 0.5px, transparent 0.5px)',
        backgroundSize: '10px 10px',
      }
    },
    {
      id: 7,
      name: 'Neon Waves',
      category: 'gradients',
      description: 'Vibrant color flows',
      style: {
        backgroundColor: '#000000',
        backgroundImage: 'linear-gradient(45deg, #ff3366, #00ff99)',
        backgroundSize: '200% 200%',
        animation: 'gradient 10s ease infinite',
      }
    },
    {
      id: 8,
      name: 'Circuit Board',
      category: 'geometric',
      description: 'Tech-inspired pattern',
      style: {
        backgroundColor: '#1a1a1a',
        backgroundImage: `
          linear-gradient(45deg, rgba(100, 100, 255, 0.1) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(100, 100, 255, 0.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(100, 100, 255, 0.1) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(100, 100, 255, 0.1) 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
      }
    },
    {
      id: 9,
      name: 'Hexagon Grid',
      category: 'patterns',
      description: 'Modern honeycomb pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `radial-gradient(circle at center center, rgba(255,255,255,.05), transparent),
          repeating-radial-gradient(circle at center center, rgba(255,255,255,.05) 0, rgba(255,255,255,.05) 3px, transparent 3px, transparent 100%)`,
        backgroundSize: '20px 20px',
      }
    },
    {
      id: 10,
      name: 'Diagonal Lines',
      category: 'geometric',
      description: 'Clean diagonal stripes',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.03) 10px,
          rgba(255, 255, 255, 0.03) 20px
        )`
      }
    },
    {
      id: 11,
      name: 'Subtle Squares',
      category: 'geometric',
      description: 'Minimalist square grid',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '-1px -1px'
      }
    },
    {
      id: 12,
      name: 'Diamond Grid',
      category: 'geometric',
      description: 'Elegant diamond pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.02) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.02) 75%)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
      }
    },
    {
      id: 13,
      name: 'Concentric Circles',
      category: 'geometric',
      description: 'Radial ring pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-radial-gradient(
            circle at center,
            transparent 0,
            transparent 10px,
            rgba(255, 255, 255, 0.03) 10px,
            rgba(255, 255, 255, 0.03) 20px
          )
        `,
        backgroundSize: '40px 40px'
      }
    },
    {
      id: 14,
      name: 'Cross Hatch',
      category: 'geometric',
      description: 'Subtle crossing lines',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(45deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }
    },
    {
      id: 15,
      name: 'Triangles',
      category: 'geometric',
      description: 'Modern triangle mosaic',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(60deg, rgba(255, 255, 255, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.02) 75.5%),
          linear-gradient(-60deg, rgba(255, 255, 255, 0.02) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.02) 75.5%)
        `,
        backgroundSize: '40px 70px'
      }
    },
    {
      id: 16,
      name: 'Tech Pulse',
      category: 'futuristic',
      description: 'Subtle tech heartbeat pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at center, rgba(128, 103, 243, 0.03) 0%, transparent 8%),
          radial-gradient(circle at center, rgba(128, 103, 243, 0.02) 0%, transparent 6%)
        `,
        backgroundSize: '60px 60px, 30px 30px',
        animation: 'techPulse 8s ease-in-out infinite'
      }
    },
    {
      id: 17,
      name: 'Digital Echo',
      category: 'futuristic',
      description: 'Rippling data waves',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1px,
            rgba(128, 103, 243, 0.02) 1px,
            rgba(128, 103, 243, 0.02) 2px
          ),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 1px,
            rgba(128, 103, 243, 0.02) 1px,
            rgba(128, 103, 243, 0.02) 2px
          )
        `,
        backgroundSize: '30px 30px',
        animation: 'digitalEcho 20s linear infinite'
      }
    },
    {
      id: 18,
      name: 'Circuit Flow',
      category: 'futuristic',
      description: 'Flowing circuit pathways',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(0deg, transparent 95%, rgba(128, 103, 243, 0.03) 95%),
          linear-gradient(90deg, transparent 95%, rgba(128, 103, 243, 0.03) 95%)
        `,
        backgroundSize: '20px 20px',
        animation: 'circuitFlow 15s linear infinite'
      }
    },
    {
      id: 19,
      name: 'Dotted Grid',
      category: 'patterns',
      description: 'Clear dot matrix layout',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(rgba(128, 103, 243, 0.15) 1px, transparent 1px),
          radial-gradient(rgba(128, 103, 243, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px, 40px 40px',
        backgroundPosition: '0 0, 10px 10px'
      }
    },
    {
      id: 20,
      name: 'Wave Dots',
      category: 'patterns',
      description: 'Flowing dot pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(128, 103, 243, 0.12) 3px, transparent 3px)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0',
        animation: 'waveDots 10s linear infinite'
      }
    },
    {
      id: 21,
      name: 'Pixel Rain',
      category: 'patterns',
      description: 'Digital rain effect',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(0deg, 
            rgba(128, 103, 243, 0.15) 25%, 
            transparent 25%,
            transparent 50%, 
            rgba(128, 103, 243, 0.15) 50%, 
            rgba(128, 103, 243, 0.15) 75%, 
            transparent 75%, 
            transparent)
        `,
        backgroundSize: '10px 10px',
        animation: 'pixelRain 20s linear infinite'
      }
    },
    {
      id: 22,
      name: 'Constellation',
      category: 'patterns',
      description: 'Connected dot network',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at center, rgba(128, 103, 243, 0.2) 2px, transparent 2px),
          linear-gradient(rgba(128, 103, 243, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(128, 103, 243, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 20px 20px, 20px 20px',
        backgroundPosition: '0 0, 10px 10px, 10px 10px'
      }
    },
    {
      id: 23,
      name: 'Binary Flow',
      category: 'futuristic',
      description: 'Digital binary stream effect',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(90deg, rgba(128, 103, 243, 0.03) 1px, transparent 1px),
          linear-gradient(180deg, rgba(128, 103, 243, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '8px 8px',
        animation: 'binaryFlow 15s linear infinite'
      }
    },
    {
      id: 24,
      name: 'Cyber Maze',
      category: 'futuristic',
      description: 'Intricate tech maze pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(45deg, transparent 48%, rgba(128, 103, 243, 0.03) 49%, rgba(128, 103, 243, 0.03) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(128, 103, 243, 0.03) 49%, rgba(128, 103, 243, 0.03) 51%, transparent 52%)
        `,
        backgroundSize: '30px 30px',
        animation: 'cyberMaze 20s linear infinite'
      }
    },
    {
      id: 25,
      name: 'Isometric Cubes',
      category: 'geometric',
      description: '3D cube illusion pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(30deg, rgba(128, 103, 243, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(128, 103, 243, 0.03) 87.5%, rgba(128, 103, 243, 0.03)),
          linear-gradient(150deg, rgba(128, 103, 243, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(128, 103, 243, 0.03) 87.5%, rgba(128, 103, 243, 0.03)),
          linear-gradient(30deg, rgba(128, 103, 243, 0.03) 12%, transparent 12.5%, transparent 87%, rgba(128, 103, 243, 0.03) 87.5%, rgba(128, 103, 243, 0.03))
        `,
        backgroundSize: '80px 140px'
      }
    },
    {
      id: 26,
      name: 'Octagon Grid',
      category: 'geometric',
      description: 'Complex octagonal pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(45deg, rgba(128, 103, 243, 0.03) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(128, 103, 243, 0.03) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(128, 103, 243, 0.03) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(128, 103, 243, 0.03) 75%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 0, 20px -20px, 0 20px'
      }
    },
    {
      id: 27,
      name: 'Micro Circles',
      category: 'patterns',
      description: 'Tiny circular dot matrix',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at center, rgba(128, 103, 243, 0.15) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '15px 15px',
        backgroundPosition: '0 0'
      }
    },
    {
      id: 28,
      name: 'Diagonal Dash',
      category: 'patterns',
      description: 'Subtle diagonal line pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(128, 103, 243, 0.1) 2px,
            rgba(128, 103, 243, 0.1) 4px
          )
        `,
        backgroundSize: '10px 10px'
      }
    },
    {
      id: 29,
      name: 'Binary Rain',
      category: 'matrix',
      description: 'Digital code rain effect',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(0deg,
            rgba(0, 255, 0, 0.15) 0px,
            rgba(0, 255, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(90deg,
            rgba(0, 255, 0, 0.15) 0px,
            rgba(0, 255, 0, 0.15) 1px,
            transparent 1px,
            transparent 4px
          )
        `,
        backgroundSize: '4px 4px',
        animation: 'matrixRain 20s linear infinite'
      }
    },
    {
      id: 30,
      name: 'Code Flow',
      category: 'matrix',
      description: 'Scrolling code pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(0deg,
            transparent 0px,
            transparent 3px,
            rgba(32, 224, 159, 0.1) 3px,
            rgba(32, 224, 159, 0.1) 6px
          ),
          repeating-linear-gradient(90deg,
            rgba(32, 224, 159, 0.1) 0px,
            rgba(32, 224, 159, 0.1) 1px,
            transparent 1px,
            transparent 8px
          )
        `,
        backgroundSize: '8px 8px',
        animation: 'codeFlow 15s linear infinite'
      }
    },
    {
      id: 31,
      name: 'Data Stream',
      category: 'matrix',
      description: 'Binary data stream',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          repeating-linear-gradient(45deg,
            rgba(32, 224, 159, 0.1) 0px,
            rgba(32, 224, 159, 0.1) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(-45deg,
            rgba(32, 224, 159, 0.1) 0px,
            rgba(32, 224, 159, 0.1) 1px,
            transparent 1px,
            transparent 4px
          )
        `,
        backgroundSize: '6px 6px',
        animation: 'dataStream 10s linear infinite'
      }
    },
    {
      id: 32,
      name: 'Terminal Grid',
      category: 'matrix',
      description: 'Retro terminal interface',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          linear-gradient(rgba(32, 224, 159, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(32, 224, 159, 0.1) 1px, transparent 1px),
          radial-gradient(rgba(32, 224, 159, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px, 20px 20px, 10px 10px',
        backgroundPosition: '0 0, 0 0, 10px 10px',
        animation: 'terminalPulse 4s ease-in-out infinite'
      }
    },
    {
      id: 33,
      name: 'ASCII Rain',
      category: 'codescape',
      description: 'Falling ASCII characters',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='rgba(32, 224, 159, 0.15)' font-family='monospace'%3E01%3C/text%3E%3Ctext x='40' y='40' fill='rgba(32, 224, 159, 0.1)' font-family='monospace'%3E10%3C/text%3E%3Ctext x='70' y='60' fill='rgba(32, 224, 159, 0.15)' font-family='monospace'%3E11%3C/text%3E%3Ctext x='20' y='80' fill='rgba(32, 224, 159, 0.1)' font-family='monospace'%3E00%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
        animation: 'asciiRain 20s linear infinite'
      }
    },
    {
      id: 34,
      name: 'Function Flow',
      category: 'codescape',
      description: 'Flowing code snippets',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='20' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Efunction()%3C/text%3E%3Ctext x='50' y='60' fill='rgba(128, 103, 243, 0.15)' font-family='monospace'%3E%7B%7D%3C/text%3E%3Ctext x='30' y='100' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Ereturn%3C/text%3E%3Ctext x='70' y='140' fill='rgba(128, 103, 243, 0.15)' font-family='monospace'%3E%3D%3E%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
        animation: 'codeArtFlow 15s linear infinite'
      }
    },
    {
      id: 35,
      name: 'Variable Grid',
      category: 'codescape',
      description: 'Grid of programming variables',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='rgba(128, 103, 243, 0.12)' font-family='monospace'%3Econst%3C/text%3E%3Ctext x='60' y='70' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3Elet%3C/text%3E%3Ctext x='20' y='110' fill='rgba(128, 103, 243, 0.12)' font-family='monospace'%3Evar%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
        animation: 'variableGrid 25s linear infinite'
      }
    },
    {
      id: 36,
      name: 'Code Comments',
      category: 'codescape',
      description: 'Subtle code documentation',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='250' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E// TODO:%3C/text%3E%3Ctext x='50' y='100' fill='rgba(128, 103, 243, 0.06)' font-family='monospace'%3E/* Fix */%3C/text%3E%3Ctext x='30' y='160' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E%23include%3C/text%3E%3Ctext x='70' y='220' fill='rgba(128, 103, 243, 0.06)' font-family='monospace'%3E%23define%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '250px 250px',
        animation: 'codeComments 30s linear infinite'
      }
    },
    {
      id: 37,
      name: 'React Code',
      category: 'codescape',
      description: 'React component patterns',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Eimport React from 'react'%3C/text%3E%3Ctext x='10' y='60' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3Econst App = () => {%3C/text%3E%3Ctext x='20' y='90' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Ereturn (%3C/text%3E%3Ctext x='30' y='120' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E&lt;div&gt;%3C/text%3E%3Ctext x='40' y='150' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3E&lt;h1&gt;Hello&lt;/h1&gt;%3C/text%3E%3Ctext x='30' y='180' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E&lt;/div&gt;%3C/text%3E%3Ctext x='20' y='210' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3E)%3C/text%3E%3Ctext x='10' y='240' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E}%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '300px 300px',
        animation: 'reactCode 30s linear infinite'
      }
    },
    {
      id: 38,
      name: 'Git Commands',
      category: 'codescape',
      description: 'Common git operations',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='250' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='rgba(128, 103, 243, 0.12)' font-family='monospace'%3Egit init%3C/text%3E%3Ctext x='40' y='70' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3Egit add .%3C/text%3E%3Ctext x='20' y='110' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Egit commit%3C/text%3E%3Ctext x='50' y='150' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3Egit push%3C/text%3E%3Ctext x='30' y='190' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3Egit merge%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '250px 250px',
        animation: 'gitCommands 25s linear infinite'
      }
    },
    {
      id: 39,
      name: 'Terminal Commands',
      category: 'codescape',
      description: 'CLI command pattern',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='280' height='280' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='rgba(32, 224, 159, 0.12)' font-family='monospace'%3E$ npm install%3C/text%3E%3Ctext x='20' y='70' fill='rgba(32, 224, 159, 0.08)' font-family='monospace'%3E$ cd project%3C/text%3E%3Ctext x='15' y='110' fill='rgba(32, 224, 159, 0.1)' font-family='monospace'%3E$ ls -la%3C/text%3E%3Ctext x='25' y='150' fill='rgba(32, 224, 159, 0.08)' font-family='monospace'%3E$ mkdir new%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '280px 280px',
        animation: 'terminalCommands 20s linear infinite'
      }
    },
    {
      id: 40,
      name: 'CSS Rules',
      category: 'codescape',
      description: 'Stylish CSS patterns',
      style: {
        backgroundColor: '#0a0a0a',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='320' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='30' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3E.container {%3C/text%3E%3Ctext x='20' y='60' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E  display: flex;%3C/text%3E%3Ctext x='20' y='90' fill='rgba(128, 103, 243, 0.1)' font-family='monospace'%3E  gap: 1rem;%3C/text%3E%3Ctext x='10' y='120' fill='rgba(128, 103, 243, 0.08)' font-family='monospace'%3E}%3C/text%3E%3C/svg%3E")`,
        backgroundSize: '320px 320px',
        animation: 'cssRules 35s linear infinite'
      }
    }
  ]

  const handleCopyCSS = (pattern) => {
    const cssString = Object.entries(pattern.style)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}: ${value};`)
      .join('\n');
    navigator.clipboard.writeText(cssString);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  }

  const getModifiedStyle = (pattern) => {
    if (!customColors[pattern.id]) return pattern.style;

    const newStyle = { ...pattern.style };
    if (pattern.category === 'gradients') {
      const colors = [
        customColors[pattern.id]?.color1 || (pattern.id === 4 ? '#ff3366' : '#12c2e9'),
        customColors[pattern.id]?.color2 || (pattern.id === 4 ? '#00ff99' : '#c471ed'),
        customColors[pattern.id]?.color3 || (pattern.id === 4 ? null : '#f64f59'),
      ].filter(Boolean);
      
      newStyle.backgroundImage = `linear-gradient(45deg, ${colors.join(', ')})`;
      newStyle.backgroundSize = '200% 200%';
      if (!newStyle.animation && pattern.category === 'gradients') {
        newStyle.animation = 'gradient 10s ease infinite';
      }
    } else {
      newStyle.backgroundColor = customColors[pattern.id]?.backgroundColor || pattern.style.backgroundColor;
      if (pattern.category === 'patterns' || pattern.category === 'geometric') {
        const patternColor = customColors[pattern.id]?.patternColor || 'rgba(255, 255, 255, 0.05)';
        newStyle.backgroundImage = pattern.style.backgroundImage.replace(
          /rgba\(255,\s*255,\s*255,\s*[\d.]+\)/g,
          patternColor
        );
      }
    }
    return newStyle;
  }

  const toggleAnimation = (pattern) => {
    setIsAnimationPaused(!isAnimationPaused);
    const style = document.documentElement.style;
    if (isAnimationPaused) {
      style.setProperty('--animation-play-state', 'running');
    } else {
      style.setProperty('--animation-play-state', 'paused');
    }
  }

  const applyToPage = (pattern) => {
    const mainElement = document.querySelector('.min-h-screen');
    
    if (mainElement) {
      // Reset previous styles
      mainElement.style.background = 'none';
      mainElement.style.animation = 'none';
      
      // Apply new styles
      const modifiedStyle = getModifiedStyle(pattern);
      
      Object.entries(modifiedStyle).forEach(([key, value]) => {
        mainElement.style[key] = value;
      });
      
      // Make sure content remains visible
      mainElement.style.position = 'relative';
      mainElement.style.zIndex = '0';
      
      // Add transition
      mainElement.style.transition = 'background-color 0.3s, background-image 0.3s';
    }
    
    setIsAppliedToPage(true);
    setTimeout(() => setIsAppliedToPage(false), 2000);
  }

  const resetBackground = () => {
    const mainElement = document.querySelector('.min-h-screen');
    if (mainElement) {
      mainElement.style.background = '';
      mainElement.style.backgroundColor = '';
      mainElement.style.backgroundImage = '';
      mainElement.style.backgroundSize = '';
      mainElement.style.backgroundPosition = '';
      mainElement.style.animation = '';
      mainElement.className = 'min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 transition-all duration-300';
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropupRef.current && !dropupRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Add this new component for the animated text
  const AnimatedWord = ({ text }) => {
    const letterVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: i * 0.1,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      }),
    }

    return (
      <motion.span
        className="relative inline-flex"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            className="relative inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // Add this function at the top of your component
  const scrollToPatterns = () => {
    const patternsSection = document.querySelector('.patterns-section')
    patternsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 transition-all duration-300 flex flex-col">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
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
          <div className="flex items-center gap-4">
            <button
              onClick={resetBackground}
              className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-violet-500/50"
            >
              Reset Background
            </button>
            <a href="https://github.com/jatin-yadav05/MotifyX" 
               className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-105 duration-300">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jatin-yadav05/" 
               className="p-2 hover:bg-white/10 rounded-lg transition-all hover:scale-105 duration-300">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <main className="flex-1">
        {/* Hero Section - adjust bottom padding */}
        <div className="relative pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent opacity-50" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 mb-8 border border-white/10 hover:border-violet-500/50 transition-all duration-300">
              <HiSparkles className="text-violet-400 animate-pulse" />
              <span className="text-sm">Design with confidence</span>
              <span className="text-white/50">•</span>
              <span className="text-zinc-400 text-sm">100% free & open source</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Transform your<br />
              <CustomGlitchText 
                text="backgrounds" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600"
              />
              {' '}
              effortlessly
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8">
              Elevate your designs with our curated collection of modern background patterns. 
              Preview, customize, and implement with just a few clicks.
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

        {/* Patterns Section - adjust padding */}
        <div className="max-w-7xl mx-auto px-4 pb-24 patterns-section">
          {/* Active Section Content */}
          <div className="relative">
            <div className={`transition-all duration-500 ${
              activeSection === 'futuristic' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Futuristic Patterns</h2>
                <p className="text-zinc-400">Next-gen patterns inspired by cyberpunk and tech aesthetics</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'futuristic')
                  .map((pattern) => (
                    <div key={pattern.id} 
                         className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />
                      <div 
                        className="h-[300px] w-full transition-transform duration-300 group-hover:scale-105" 
                        style={pattern.style} 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium mb-1">{pattern.name}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{pattern.description}</p>
                        <div className="flex justify-between items-center gap-3">
                          <button 
                            className="flex-1 text-xs bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => setSelectedPattern(pattern)}
                          >
                            <HiEye className="w-4 h-4" />
                            Preview
                          </button>
                          <button 
                            className="flex-1 text-xs bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => handleCopyCSS(pattern)}
                          >
                            <HiClipboard className="w-4 h-4" />
                            Copy CSS
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${
              activeSection === 'geometric' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Geometric Patterns</h2>
                <p className="text-zinc-400">Clean, structured patterns for sophisticated designs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'geometric')
                  .map((pattern) => (
                    <div key={pattern.id} 
                         className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />
                      <div 
                        className="h-[300px] w-full transition-transform duration-300 group-hover:scale-105" 
                        style={pattern.style} 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium mb-1">{pattern.name}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{pattern.description}</p>
                        <div className="flex justify-between items-center gap-3">
                          <button 
                            className="flex-1 text-xs bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => setSelectedPattern(pattern)}
                          >
                            <HiEye className="w-4 h-4" />
                            Preview
                          </button>
                          <button 
                            className="flex-1 text-xs bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => handleCopyCSS(pattern)}
                          >
                            <HiClipboard className="w-4 h-4" />
                            Copy CSS
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${
              activeSection === 'patterns' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Dot Patterns</h2>
                <p className="text-zinc-400">Subtle, repeating patterns for texture and depth</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'patterns')
                  .map((pattern) => (
                    <div key={pattern.id} 
                         className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />
                      <div 
                        className="h-[300px] w-full transition-transform duration-300 group-hover:scale-105" 
                        style={pattern.style} 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium mb-1">{pattern.name}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{pattern.description}</p>
                        <div className="flex justify-between items-center gap-3">
                          <button 
                            className="flex-1 text-xs bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => setSelectedPattern(pattern)}
                          >
                            <HiEye className="w-4 h-4" />
                            Preview
                          </button>
                          <button 
                            className="flex-1 text-xs bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => handleCopyCSS(pattern)}
                          >
                            <HiClipboard className="w-4 h-4" />
                            Copy CSS
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${
              activeSection === 'matrix' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Matrix Patterns</h2>
                <p className="text-zinc-400">Digital code and binary-inspired backgrounds</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'matrix')
                  .map((pattern) => (
                    <div key={pattern.id} 
                         className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />
                      <div 
                        className="h-[300px] w-full transition-transform duration-300 group-hover:scale-105" 
                        style={pattern.style} 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium mb-1">{pattern.name}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{pattern.description}</p>
                        <div className="flex justify-between items-center gap-3">
                          <button 
                            className="flex-1 text-xs bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => setSelectedPattern(pattern)}
                          >
                            <HiEye className="w-4 h-4" />
                            Preview
                          </button>
                          <button 
                            className="flex-1 text-xs bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => handleCopyCSS(pattern)}
                          >
                            <HiClipboard className="w-4 h-4" />
                            Copy CSS
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className={`transition-all duration-500 ${
              activeSection === 'codescape' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Codescape Patterns</h2>
                <p className="text-zinc-400">Programming landscapes and code-inspired designs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'codescape')
                  .map((pattern) => (
                    <div key={pattern.id} 
                         className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent z-10" />
                      <div 
                        className="h-[300px] w-full transition-transform duration-300 group-hover:scale-105" 
                        style={pattern.style} 
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 className="text-lg font-medium mb-1">{pattern.name}</h3>
                        <p className="text-sm text-zinc-400 mb-4">{pattern.description}</p>
                        <div className="flex justify-between items-center gap-3">
                          <button 
                            className="flex-1 text-xs bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => setSelectedPattern(pattern)}
                          >
                            <HiEye className="w-4 h-4" />
                            Preview
                          </button>
                          <button 
                            className="flex-1 text-xs bg-violet-500 px-3 py-2 rounded-lg hover:bg-violet-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                            onClick={() => handleCopyCSS(pattern)}
                          >
                            <HiClipboard className="w-4 h-4" />
                            Copy CSS
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Section Selector */}
          <div className="fixed bottom-8 right-8 z-[60]" ref={dropupRef}>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-zinc-900/90 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 hover:border-violet-500/50 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                <HiChevronUp className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute bottom-full mb-2 right-0 transition-all duration-300 ${
                isMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  {['geometric', 'futuristic', 'patterns', 'matrix', 'codescape'].map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        setActiveSection(section)
                        setIsMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${
                        activeSection === section ? 'text-violet-400' : 'text-zinc-400'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950/50 backdrop-blur-xl relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
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
                Transform your designs with stunning background patterns. Motify<span className="text-violet-400">X</span> makes 
                it easy to discover, customize, and implement beautiful patterns in your projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2 text-sm text-zinc-400">
                <button onClick={() => setActiveSection('geometric')} className="hover:text-violet-400 text-left">
                  Geometric Patterns
                </button>
                <button onClick={() => setActiveSection('futuristic')} className="hover:text-violet-400 text-left">
                  Futuristic Patterns
                </button>
                <button onClick={() => setActiveSection('patterns')} className="hover:text-violet-400 text-left">
                  Dot Patterns
                </button>
                <button onClick={() => setActiveSection('matrix')} className="hover:text-violet-400 text-left">
                  Matrix Patterns
                </button>
                <button onClick={() => setActiveSection('codescape')} className="hover:text-violet-400 text-left">
                  Codescape Patterns
                </button>
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

      {/* Copy Notification */}
      <div className={`fixed top-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 transition-all duration-300 z-50 ${
        showCopyNotification 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <HiCheck className="text-green-500" />
        <span>CSS copied to clipboard!</span>
      </div>

      {/* Preview Modal */}
      {selectedPattern && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-4xl border border-white/10 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-zinc-900">
              <h3 className="text-lg font-medium">{selectedPattern.name}</h3>
              <button 
                onClick={() => setSelectedPattern(null)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <HiX className="w-5 h-5" />
              </button>
            </div>
            
            {/* Pattern Preview */}
            <div className="relative h-[300px] flex-shrink-0">
              <div 
                className="absolute inset-0 transition-transform duration-300" 
                style={getModifiedStyle(selectedPattern)} 
              />
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Customization Controls */}
              <div className="p-4 border-t border-white/10 bg-black/30">
                <h4 className="text-sm font-medium text-zinc-400 mb-3">Customize Pattern</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedPattern.category === 'gradients' ? (
                    <>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-400">Color 1:</label>
                        <input 
                          type="color" 
                          value={customColors[selectedPattern.id]?.color1 || '#12c2e9'}
                          onChange={(e) => setCustomColors(prev => ({
                            ...prev,
                            [selectedPattern.id]: { ...prev[selectedPattern.id], color1: e.target.value }
                          }))}
                          className="w-8 h-8 rounded cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-400">Color 2:</label>
                        <input 
                          type="color"
                          value={customColors[selectedPattern.id]?.color2 || '#c471ed'}
                          onChange={(e) => setCustomColors(prev => ({
                            ...prev,
                            [selectedPattern.id]: { ...prev[selectedPattern.id], color2: e.target.value }
                          }))}
                          className="w-8 h-8 rounded cursor-pointer"
                        />
                      </div>
                      {selectedPattern.style.backgroundImage.includes('linear-gradient') && 
                       selectedPattern.style.backgroundImage.split(',').length > 2 && (
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-zinc-400">Color 3:</label>
                          <input 
                            type="color"
                            value={customColors[selectedPattern.id]?.color3 || '#f64f59'}
                            onChange={(e) => setCustomColors(prev => ({
                              ...prev,
                              [selectedPattern.id]: { ...prev[selectedPattern.id], color3: e.target.value }
                            }))}
                            className="w-8 h-8 rounded cursor-pointer"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-400">Background:</label>
                        <input 
                          type="color"
                          value={customColors[selectedPattern.id]?.backgroundColor || '#000000'}
                          onChange={(e) => setCustomColors(prev => ({
                            ...prev,
                            [selectedPattern.id]: { ...prev[selectedPattern.id], backgroundColor: e.target.value }
                          }))}
                          className="w-8 h-8 rounded cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-zinc-400">Pattern Color:</label>
                        <input 
                          type="color"
                          value={customColors[selectedPattern.id]?.patternColor || '#ffffff'}
                          onChange={(e) => setCustomColors(prev => ({
                            ...prev,
                            [selectedPattern.id]: { ...prev[selectedPattern.id], patternColor: e.target.value }
                          }))}
                          className="w-8 h-8 rounded cursor-pointer"
                        />
                      </div>
                    </>
                  )}
                  
                  {selectedPattern.style.animation && (
                    <button
                      onClick={() => toggleAnimation(selectedPattern)}
                      className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                    >
                      {isAnimationPaused ? (
                        <>
                          <HiPlay className="w-4 h-4" />
                          Resume Animation
                        </>
                      ) : (
                        <>
                          <HiPause className="w-4 h-4" />
                          Pause Animation
                        </>
                      )}
                    </button>
                  )}
                  
                  <button
                    onClick={() => applyToPage(selectedPattern)}
                    className="flex items-center gap-2 px-3 py-1 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm transition-colors ml-auto"
                  >
                    <HiRefresh className="w-4 h-4" />
                    Apply to Page
                  </button>
                </div>
              </div>

              {/* CSS Code */}
              <div className="p-6 bg-black/50">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-medium text-zinc-400">CSS Code</h4>
                  <button
                    onClick={() => handleCopyCSS(selectedPattern)}
                    className="flex items-center gap-2 px-3 py-1 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm transition-colors"
                  >
                    <HiClipboard className="w-4 h-4" />
                    Copy CSS
                  </button>
                </div>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-zinc-300">
                    {Object.entries(getModifiedStyle(selectedPattern))
                      .map(([key, value]) => `${key.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}: ${value};`)
                      .join('\n')}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apply to Page Notification */}
      <div className={`fixed top-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 transition-all duration-300 z-50 ${
        isAppliedToPage 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <HiCheck className="text-green-500" />
        <span>Pattern applied to page!</span>
      </div>
    </div>
  )
}

export default App