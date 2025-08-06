import './ArtSection.css';
import HireButton from '../Components/HireButton.jsx';

function ArtSection() {
    return (
        <section className="art-section">
            <div className="art-section-text">
                <h2>A few Artists we own</h2>
                <p>Growing and nurturing a loyal community through social media, forums, and other decentralized platforms.Collaborating with key influencers in the Web 3 space to amplify your brand's reach and credibility.</p>
                <div style={{ position: 'relative', height: '400px' }}>
                    <HireButton style={{ top: '50px', left: '-4px' }} />
                </div>
            </div>

            <div className="art-section-images">
                <div className="avatar-wrapper span-2x2"><img src="/avatars/avatar1.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar2.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x2"><img src="/avatars/avatar3.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar4.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-2x1"><img src="/avatars/avatar5.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar6.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar7.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-2x2"><img src="/avatars/avatar8.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar9.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar10.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar11.png" alt='avatar' /></div>
                <div className="avatar-wrapper span-1x1"><img src="/avatars/avatar12.png" alt='avatar' /></div>
            </div>


        </section>
    );
}

export default ArtSection;
