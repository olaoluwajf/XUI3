import './ServicesSection.css'

function ServicesSection() {
    return (
        <section className='services-section'>
            <div className="services-text">
                <h2>Our Services</h2>
                <p>A pioneering platform where bold artists and innovators redefine digital expression through decentralized technologies.</p>
            </div>
            <div className='main-service-card'>
                <div className="main-sevice-text">
                    <h3>Blockchain Branding</h3>
                    <p>Identity Creation*: We help you develop a strong, unique brand identity that resonates with the Web 3 community. Token Design Crafting visually stunning and functional token designs that embody your brand's essence.</p>
                </div>
                <div className="main-service-img">
                    <img src="Eth.png" className="img-1" alt="Blockchain Branding" />
                    <img src="Ycoin.png" className="img-2" alt="Blockchain Branding" />
                </div>
            </div>
            <div className='aux-services-container'>
                <div className='aux-service-card'>
        <h3>Decentralized Marketing</h3>
        <p>Growing and nurturing a loyal community through social media, forums, and other decentralized platforms.Collaborating with key influencers in the Web 3 space to amplify your brand's reach and credibility.</p>
    </div>
                <div className='aux-service-card'>
        <h3>Smart Contract Integration</h3>
        <p>Developing tailored smart contracts that enhance your brand's offerings and ensure seamless interactions. Ensuring all smart contracts are secure and thoroughly audited for maximum reliability.</p>
    </div>
            </div>

        </section>
    )
}

export default ServicesSection