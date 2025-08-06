import './HireButton.css';

function HireButton({ style }) {
  return (
    <button className="circle-btn" style={style}>
      Hire Us <span className="arrow">→</span>
    </button>
  );
}

export default HireButton;
