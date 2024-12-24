export const patterns = [
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
        category: 'gradientss',
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
        category: 'gradientss',
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
    },
    {
        id: 41,
        name: 'Dark Nebula',
        category: 'gradients',
        description: 'Deep space nebula effect',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(125deg, #0a0a0a 0%, #2d1b4e 29%, #1a0b2e 67%, #0a0a0a 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientFlow 15s ease infinite'
        }
    },
    {
        id: 42,
        name: 'Cyber Punk',
        category: 'gradients',
        description: 'Neon city vibes',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: 'linear-gradient(45deg, #0a0a0a 0%, #1a0b2e 30%, #2d0a2e 70%, #0a0a0a 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientPulse 12s ease infinite'
        }
    },
    {
        id: 43,
        name: 'Dark Matter',
        category: 'gradients',
        description: 'Cosmic dark matter flow',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, #1a0b2e 0%, #0a0a0a 100%),
              linear-gradient(45deg, #2d1b4e 0%, transparent 100%)
            `,
            backgroundSize: '200% 200%',
            animation: 'darkMatter 20s ease infinite'
        }
    },
    {
        id: 44,
        name: 'Shadow Realm',
        category: 'gradients',
        description: 'Mysterious dark realm',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #0a0a0a 50%, #2d1b4e 75%, #0a0a0a 100%)
            `,
            backgroundSize: '400% 400%',
            animation: 'shadowRealm 25s ease infinite'
        }
    },
    {
        id: 45,
        name: 'Deep Ocean',
        category: 'gradients',
        description: 'Abyssal ocean depths',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              linear-gradient(180deg, #0a0a0a 0%, #0a192f 35%, #0a1f3f 75%, #0a0a0a 100%)
            `,
            backgroundSize: '200% 200%',
            animation: 'deepOcean 18s ease infinite'
        }
    },
    {
        id: 46,
        name: 'Dark Energy',
        category: 'gradients',
        description: 'Cosmic dark energy waves',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
              radial-gradient(circle at 30% 50%, #1a0b2e 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, #2d1b4e 0%, #0a0a0a 50%)
            `,
            backgroundSize: '200% 200%',
            animation: 'darkEnergy 22s ease infinite'
        }
    },
    {
        id: 47,
        name: 'Neural Network',
        category: 'matrix',
        description: 'AI network visualization',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(32, 224, 159, 0.1) 2px, transparent 2px),
                linear-gradient(0deg, 
                    rgba(32, 224, 159, 0.05) 1px,
                    transparent 1px
                ),
                linear-gradient(90deg, 
                    rgba(32, 224, 159, 0.05) 1px, 
                    transparent 1px
                )
            `,
            backgroundSize: '40px 40px, 20px 20px, 20px 20px',
            animation: 'neuralMatrix 20s linear infinite'
        }
    },
    {
        id: 48,
        name: 'Digital Rain Pro',
        category: 'matrix',
        description: 'Enhanced matrix rain effect',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
                repeating-linear-gradient(90deg,
                    rgba(32, 224, 159, 0.15) 0px,
                    rgba(32, 224, 159, 0.15) 1px,
                    transparent 1px,
                    transparent 3px
                ),
                repeating-linear-gradient(0deg,
                    rgba(32, 224, 159, 0) 0px,
                    rgba(32, 224, 159, 0.15) 2px,
                    rgba(32, 224, 159, 0) 4px,
                    transparent 4px,
                    transparent 8px
                )
            `,
            backgroundSize: '4px 8px',
            animation: 'digitalRainPro 15s linear infinite'
        }
    },
    {
        id: 49,
        name: 'Quantum Data',
        category: 'matrix',
        description: 'Quantum computing visualization',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(32, 224, 159, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(32, 224, 159, 0.1) 0%, transparent 50%),
                linear-gradient(90deg,
                    transparent 0%,
                    rgba(32, 224, 159, 0.05) 25%,
                    rgba(32, 224, 159, 0.05) 75%,
                    transparent 100%
                )
            `,
            backgroundSize: '50px 50px, 50px 50px, 10px 10px',
            animation: 'quantumData 25s linear infinite'
        }
    },
    {
        id: 50,
        name: 'Cyber Grid',
        category: 'matrix',
        description: 'Advanced cyberpunk grid',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
                linear-gradient(0deg, transparent 24%, 
                    rgba(32, 224, 159, 0.05) 25%, 
                    rgba(32, 224, 159, 0.05) 26%, 
                    transparent 27%, 
                    transparent 74%, 
                    rgba(32, 224, 159, 0.05) 75%, 
                    rgba(32, 224, 159, 0.05) 76%, 
                    transparent 77%),
                linear-gradient(90deg, transparent 24%, 
                    rgba(32, 224, 159, 0.05) 25%, 
                    rgba(32, 224, 159, 0.05) 26%, 
                    transparent 27%, 
                    transparent 74%, 
                    rgba(32, 224, 159, 0.05) 75%, 
                    rgba(32, 224, 159, 0.05) 76%, 
                    transparent 77%)
            `,
            backgroundSize: '30px 30px',
            animation: 'cyberGridPulse 20s ease infinite'
        }
    },
    {
        id: 51,
        name: 'Binary Pulse',
        category: 'matrix',
        description: 'Pulsing binary code effect',
        style: {
            backgroundColor: '#0a0a0a',
            backgroundImage: `
                repeating-linear-gradient(45deg,
                    rgba(32, 224, 159, 0.1) 0px,
                    rgba(32, 224, 159, 0.1) 2px,
                    transparent 2px,
                    transparent 4px
                ),
                repeating-linear-gradient(-45deg,
                    rgba(32, 224, 159, 0.05) 0px,
                    rgba(32, 224, 159, 0.05) 2px,
                    transparent 2px,
                    transparent 4px
                )
            `,
            backgroundSize: '8px 8px',
            animation: 'binaryPulse 15s linear infinite'
        }
    }
]