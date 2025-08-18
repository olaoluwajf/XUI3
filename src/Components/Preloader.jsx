import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader({ loading }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!loading) {
      setFade(true);
      const timer = setTimeout(() => {
        setFade(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className={`preloader ${!loading ? "fade-out" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}
