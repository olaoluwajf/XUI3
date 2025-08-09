import './AboutTeaser.css';

function AboutTeaser() {
  return (
    <section className="about-teaser">
      <div className="about-teaser-left">
        <h1>
          A Web3
          Brand
          Agency <span className="tag">Full Cycle</span>
        </h1>
      </div>

      <div className="about-teaser-right">
        <p>
          In a world where Web3 technologies are reshaping how we interact, transact, and connect, brands must adapt to stay relevant and thrive. At XUI3, we envision a future where every brand can seamlessly integrate into the decentralized landscape, achieving unparalleled engagement and trust with their audience.
        </p>


        <button className="circle-btn__abt-teaser">Hire Us <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

export default AboutTeaser;
