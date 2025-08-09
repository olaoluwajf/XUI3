import './VisionSection.css'
import HireButton from '../Components/HireButton.jsx'

function VisionSection() {
    return (
<section className="vision-section">
    <div className="vision-content">
<h2>Our Vision</h2>
<p>In a world where Web 3 technologies are reshaping how we interact, transact, and connect, brands must adapt to stay relevant and thrive. At XUI3, we envision a future where every brand can seamlessly integrate into the decentralized landscape, achieving unparalleled engagement and trust with their audience.</p>
<HireButton />
    </div>
    <div className="vision-image">
<img src="planet.png" alt='planet-image' />
    </div>
</section>
    )
}

export default VisionSection