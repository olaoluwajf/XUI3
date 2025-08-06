import './FeaturesSection.css';

function FeaturesSection() {
    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-text">
                    <h2>Elevate Your Brand in the Web3 Space with XUI3</h2>
                    <p>
                        Welcome to XUI3, your premier partner in elevating brand value within the dynamic and rapidly evolving Web 3 space. Our mission is to empower businesses and innovators to harness the full potential of decentralized technologies, blockchain, and digital assets, creating compelling and lasting brand experiences.
                    </p>
                </div>

                <div className="features-cards">
                    <div className="glow-yellow"></div>
                    <div className="feature-card">
                        
                        <div className="icon-container">
                            
                           
                        </div>
                        <h3>Block Chain</h3>
                    </div>

                    <div className="feature-card">
                        <div className="glow-orange"></div>
                        <div className="icon-container">

                        </div>
                        <h3>Decentralized marketing</h3>
                    </div>

                    <div className="feature-card">
                        <div className="glow-blue"></div>
                        <div className="icon-container">

                        </div>
                        <h3>Data Protection</h3>
                    </div>

                    <div className="feature-card">
                        <div className="glow-green"></div>
                        <div className="icon-container">

                        </div>
                        <h3>Smart Contracting</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
