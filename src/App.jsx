import React, { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiSparkles, HiCode, HiClipboard, HiEye, HiColorSwatch, HiX, HiCheck, HiRefresh, HiPlay, HiPause, HiChevronUp, HiSelector } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import {patterns} from './data/patterns'
import Footer from './components/Footer'


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
  const [hasInteracted, setHasInteracted] = useState(false)
  


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

            <div className={`transition-all duration-500 ${
              activeSection === 'gradients' 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
            }`}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Dark Gradients</h2>
                <p className="text-zinc-400">Subtle, dark gradient patterns for modern interfaces</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {patterns
                  .filter(pattern => pattern.category === 'gradients')
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
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setHasInteracted(true);
                }}
                className="relative group flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                {/* Animated border effect */}
                {!hasInteracted && (
                  <div className="absolute -inset-[2px] rounded-lg">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500/50 via-transparent to-violet-500/50 animate-borderFlow" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-violet-500/50 via-transparent to-violet-500/50 animate-borderFlowVertical" />
                  </div>
                )}
                <span className="capitalize">{activeSection}</span>
                <HiChevronUp className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute bottom-full mb-2 right-0 transition-all duration-300 ${
                isMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                  {['geometric', 'futuristic', 'patterns', 'matrix', 'codescape', 'gradients'].map((section) => (
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

      <Footer setActiveSection={setActiveSection} />

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