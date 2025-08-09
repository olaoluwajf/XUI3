import './MainServices.css';

function MainServices() {
  const services = [
    {
      icon: 'icon (3).png', 
      title: 'Decentralized Marketing',
      description:
        'Growing and nurturing a loyal community through social media, forums, and other decentralized platforms.Collaborating with key influencers in the Web 3 space to amplify your brand’s reach and credibility.',
    },
    {
      icon: 'icon (1).png',
      title: 'Decentralized Marketing',
      description:
        'Growing and nurturing a loyal community through social media, forums, and other decentralized platforms.Collaborating with key influencers in the Web 3 space to amplify your brand’s reach and credibility.',
    },
    {
      icon: 'icon (2).png',
      title: 'Decentralized Marketing',
      description:
        'Growing and nurturing a loyal community through social media, forums, and other decentralized platforms.Collaborating with key influencers in the Web 3 space to amplify your brand’s reach and credibility.',
    },
  ];

  return (
    <section className="main-services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          A pioneering platform where bold artists and innovators redefine digital expression
          through decentralized technologies.
        </p>
      </div>

      <div className="services-layout">
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt="" className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-feature">
          <div className="service-card feature-card">
            <img src="icon (4).png" alt="" className="service-icon" />
            <h3>Decentralized Marketing</h3>
            <p>
              Growing and nurturing a loyal community through social media, forums, and other
              decentralized platforms.Collaborating with key influencers in the Web 3 space to
              amplify your brand’s reach and credibility.
            </p>
                    <div className="main-service-img__mss">
                        <img src="Eth.png" className="img-1__mss" alt="Blockchain Branding" />
                        <img src="Ycoin.png" className="img-2__mss" alt="Blockchain Branding" />
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainServices;

