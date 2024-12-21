/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'glow-wide': 'glowWide 6s ease-in-out infinite',
        'slide': 'slide 5s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'neuralPulse': 'neuralPulse 10s ease infinite',
        'dataFlow': 'dataFlow 20s linear infinite',
        'quantumShift': 'quantumShift 15s ease infinite',
        'techPulse': 'techPulse 8s ease-in-out infinite',
        'digitalEcho': 'digitalEcho 20s linear infinite',
        'circuitFlow': 'circuitFlow 15s linear infinite',
        'waveDots': 'waveDots 10s linear infinite',
        'pixelRain': 'pixelRain 20s linear infinite',
        'binaryFlow': 'binaryFlow 15s linear infinite',
        'cyberMaze': 'cyberMaze 20s linear infinite',
        'matrixRain': 'matrixRain 20s linear infinite',
        'codeFlow': 'codeFlow 15s linear infinite',
        'dataStream': 'dataStream 10s linear infinite',
        'terminalPulse': 'terminalPulse 4s ease-in-out infinite',
        'asciiRain': 'asciiRain 20s linear infinite',
        'codeArtFlow': 'codeArtFlow 15s linear infinite',
        'variableGrid': 'variableGrid 25s linear infinite',
        'codeComments': 'codeComments 30s linear infinite',
        'reactCode': 'reactCode 30s linear infinite',
        'gitCommands': 'gitCommands 25s linear infinite',
        'terminalCommands': 'terminalCommands 20s linear infinite',
        'cssRules': 'cssRules 35s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            opacity: 0.7,
            transform: 'scaleX(0.95)',
            filter: 'blur(8px)',
          },
          '50%': { 
            opacity: 1,
            transform: 'scaleX(1.05)',
            filter: 'blur(12px)',
          }
        },
        glowWide: {
          '0%, 100%': { 
            opacity: 0.5,
            transform: 'scaleX(0.9)',
          },
          '50%': { 
            opacity: 0.8,
            transform: 'scaleX(1.1)',
          }
        },
        slide: {
          '0%': { 
            transform: 'translateX(-100%) translateY(-50%)',
          },
          '100%': { 
            transform: 'translateX(400%) translateY(-50%)',
          }
        },
        pulseSubtle: {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scaleY(1)',
          },
          '50%': {
            opacity: 0.5,
            transform: 'scaleY(1.2)',
          },
        },
        neuralPulse: {
          '0%, 100%': { 
            backgroundSize: '60px 60px, 60px 60px, 60px 60px, 30px 30px, 30px 30px',
            filter: 'hue-rotate(0deg)',
          },
          '50%': { 
            backgroundSize: '65px 65px, 65px 65px, 65px 65px, 32px 32px, 32px 32px',
            filter: 'hue-rotate(45deg)',
          }
        },
        dataFlow: {
          '0%': { 
            backgroundPosition: '0 0, 25px 25px',
            opacity: 0.8,
          },
          '50%': {
            opacity: 1,
          },
          '100%': { 
            backgroundPosition: '50px 0, 75px 25px',
            opacity: 0.8,
          }
        },
        quantumShift: {
          '0%, 100%': {
            backgroundSize: '40px 40px, 40px 40px, 200px 200px, 400px 400px',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            backgroundSize: '40px 40px, 40px 40px, 220px 220px, 420px 420px',
            filter: 'hue-rotate(30deg) brightness(1.1)',
          }
        },
        techPulse: {
          '0%, 100%': {
            backgroundSize: '60px 60px, 30px 30px',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            backgroundSize: '65px 65px, 35px 35px',
            filter: 'hue-rotate(30deg)',
          }
        },
        digitalEcho: {
          '0%': {
            backgroundPosition: '0 0',
            opacity: 0.8,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            backgroundPosition: '30px 30px',
            opacity: 0.8,
          }
        },
        circuitFlow: {
          '0%, 100%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            backgroundPosition: '10px 10px',
            filter: 'hue-rotate(15deg)',
          }
        },
        waveDots: {
          '0%, 100%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            backgroundPosition: '15px 15px',
            filter: 'hue-rotate(180deg)',
          }
        },
        pixelRain: {
          '0%': {
            backgroundPosition: '0 0',
          },
          '100%': {
            backgroundPosition: '0 100px',
          }
        },
        binaryFlow: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            backgroundPosition: '0 100px',
            filter: 'hue-rotate(360deg)',
          }
        },
        cyberMaze: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.2)',
          },
          '100%': {
            backgroundPosition: '30px 30px',
            filter: 'hue-rotate(360deg) brightness(1)',
          }
        },
        matrixRain: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.2)',
          },
          '100%': {
            backgroundPosition: '0 100px',
            filter: 'hue-rotate(360deg) brightness(1)',
          }
        },
        codeFlow: {
          '0%': {
            backgroundPosition: '0 0',
            opacity: 0.8,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            backgroundPosition: '0 50px',
            opacity: 0.8,
          }
        },
        dataStream: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            backgroundPosition: '12px 12px',
            filter: 'hue-rotate(360deg)',
          }
        },
        terminalPulse: {
          '0%, 100%': {
            opacity: 0.8,
            filter: 'brightness(1) hue-rotate(0deg)',
          },
          '50%': {
            opacity: 1,
            filter: 'brightness(1.2) hue-rotate(30deg)',
          }
        },
        asciiRain: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            backgroundPosition: '0 1000px',
            filter: 'hue-rotate(360deg)',
          }
        },
        codeArtFlow: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.1)',
          },
          '100%': {
            backgroundPosition: '200px 200px',
            filter: 'hue-rotate(360deg) brightness(1)',
          }
        },
        variableGrid: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            backgroundPosition: '150px 150px',
            filter: 'hue-rotate(360deg)',
          }
        },
        codeComments: {
          '0%': {
            backgroundPosition: '0 0',
            opacity: 0.8,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            backgroundPosition: '250px 250px',
            opacity: 0.8,
          }
        },
        reactCode: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.1)',
          },
          '100%': {
            backgroundPosition: '0 600px',
            filter: 'hue-rotate(360deg) brightness(1)',
          }
        },
        gitCommands: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg)',
          },
          '100%': {
            backgroundPosition: '250px 250px',
            filter: 'hue-rotate(360deg)',
          }
        },
        terminalCommands: {
          '0%': {
            backgroundPosition: '0 0',
            opacity: 0.8,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            backgroundPosition: '0 280px',
            opacity: 0.8,
          }
        },
        cssRules: {
          '0%': {
            backgroundPosition: '0 0',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            filter: 'hue-rotate(180deg) brightness(1.2)',
          },
          '100%': {
            backgroundPosition: '320px 320px',
            filter: 'hue-rotate(360deg) brightness(1)',
          }
        }
      }
    }
  }
}