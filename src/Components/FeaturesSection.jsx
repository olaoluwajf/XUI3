import './FeaturesSection.css';

function FeaturesSection() {
    return (
        <section className="features-section">            <div className="glow-green">
                    <img src="Glow-ellipse.png" alt="glow" className='glow-image' />
                </div>
            <div className="features-container">    
                <div className="features-text">
                    <h2>Elevate Your Brand in the Web3 Space with XUI3</h2>
                    <p>
                        Welcome to XUI3, your premier partner in elevating brand value within the dynamic and rapidly evolving Web 3 space. Our mission is to empower businesses and innovators to harness the full potential of decentralized technologies, blockchain, and digital assets, creating compelling and lasting brand experiences.
                    </p>
                </div>

                <div className="features-cards">
                    <img src="features.png" alt="features" />
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
