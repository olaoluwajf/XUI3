import './TorsoSection.css';

function TorsoSection() {
  return (
    <section className="torso-section">
      <div className="torso-container">
        <img
          src="Torso.jpg"
          alt="Statue"
          className="statue-image"
        />
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>  
      </div>
    </section>
  );
}

export default TorsoSection;
