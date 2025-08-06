import './Hero.css'
import HireButton from './HireButton.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="glow-background"></div>  
      <div className="hero-content">
    <h1>
      Web 3 Space for Audacious Creators
    </h1>
    <p>
      A pioneering platform where bold artists and innovators redefine digital expression through decentralized technologies.
    </p>
    <div className="hero-button-container" style={{ position: 'absolute' }}>
    <HireButton style={{ left: '310px' }} />
    </div>
    <div className="scroll-indicator">
  <svg viewBox="0 0 200 200" className="circle-text">
    <defs>
      <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
    </defs>
    <text font-size="14" fill="white">
      <textPath href="#circlePath" startOffset="0%">
        SCROLL TO EXPLORE • SCROLL TO EXPLORE •
      </textPath>
    </text>
  </svg>
  <div className="circle-arrow">↓</div>
</div>

      </div>
    </section>
  )
}
export default Hero

