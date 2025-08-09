import './AboutHero.css'

export default function AboutHero() {
  return (
    <section className="about-hero">

 <img src="Background.png" alt="Background" className="bg-image" />
      <img src="avatar1.png" alt="Avatar 1" className="floating-avatar top-left" />
      <img src="avatar2.png" alt="Avatar 2" className="floating-avatar top-right" />
      <img src="avatar3.png" alt="Avatar 3" className="floating-avatar bottom-left" />
      <img src="avatar4.png" alt="Avatar 4" className="floating-avatar bottom-right" />

      <div className="about-glow-green">
                    <img src="Glow-ellipse.png" alt="glow" className='glow-image' />
                </div>
      <div className="about-hero-content">
        <h1>Unparalleled Trust & Engagement</h1>
        <p>
          A pioneering platform where bold artists and innovators redefine digital expression
          through decentralized technologies.
        </p>
        <div className="avatar-row">
               <img src="avatar1.png" alt="" />
            <img src="avatar2.png" alt="" />
            <img src="avatar3.png" alt="" />
            <img src="avatar4.png" alt="" />
          <span className="badge">+140 designers</span>
        </div>
      </div>
      
    </section>
  )
}
