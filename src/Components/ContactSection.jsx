import './ContactSection.css'
import HireButton from '../Components/HireButton.jsx'

function ContactSection () {
    return (
<section className="contact-section">
        <div className="contact-container">
            <div className="contact-text">
                <h2>Contact Us</h2>
                <p>Ready to elevate your brand in the Web 3 space? Get in touch with us today to start your journey with XUI3.</p>
                           <div className="btn" style={{ position: 'relative', height: '400px' }}>
                    <HireButton style={{ top: '10px', left: '-4px' }} />
                </div>
            </div>
   <div className="contact-form">
      <form className="form-row">
        <div className="form-section">
          <input type="text" id="full-name" name="full-name" placeholder="Full name" />
          <textarea id="details" name="details" rows="5" placeholder="Details"></textarea>
        </div>

        <div className="form-section">
          <input type="email" id="email" name="email" placeholder="E-mail Address" />

                            <input type="tel" id="phone" name="phone" placeholder="Phone No." />
        </div>
      </form>
    </div>
        </div>
</section>
    )
}

export default ContactSection