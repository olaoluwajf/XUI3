import './ServicesHero.css';
import HireButton from '../Components/HireButton';

function ServicesHero() {
    return (
        <section className="services-hero">

            <div className="services-content">
                <div className="services-text">
                    <h1>
                        Expertise in Web3  Innovative Solutions
                    </h1><span className="about-tag">About Us</span>
                    <HireButton />
                </div>
                <div className="green-curve">
                    <div className="cards-container">
                        <img className="cards" src="features.png" alt="Services Cards" />
                    </div>
                </div>
                <div className="services-image">
                    <img src="torso3.png" alt="Statue" />
                </div>
            </div>




        </section>
    );
}

export default ServicesHero;
