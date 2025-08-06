import './FooterSection.css'

function FooterSection () {
    return(
<div className="footer-section">
    <div className='footer-container'>
    <div className='footer-logo'>
                <img src='./logo.png' alt='logo' />
    </div>
    <div className='footer-text'>
<p>© 2025 Webxiel. All rights reserved.</p>
    </div>
    </div>

    <div className="glow-background-footer"></div>
</div>
    )
}

export default FooterSection