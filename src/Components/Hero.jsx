import './Hero.css'
import HireButton from './HireButton.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="glow-background"></div>  <div className="hero-content">
    <h1>
      Web 3 Space for <br /> Audacious Creators
    </h1>
    <p>
      A pioneering platform where bold artists and innovators redefine digital expression through decentralized technologies.
    </p><HireButton style={{ left: '310px' }} />
      </div>
    </section>
  )
}
export default Hero

