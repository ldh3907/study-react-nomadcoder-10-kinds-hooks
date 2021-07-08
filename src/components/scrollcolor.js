import { useState, useEffect, useRef } from "react";
import "./scrollcolor.css";

const ScrollColor = () => {
  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0,
    });
    const onScroll = () => {
      setState({ x: window.scrollX, y: window.scrollY });
      // console.log(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    });

    return state;
  };
  const { y } = useScroll();
  return (
    <section id="scrollcolor">
      <div className="scrollcolor-container">
        <div className="scrollcolor-wrap">
          <div className="scrollcolor-title">Scroll Color</div>
          <div
            className="scrollcolor-text"
            style={{ color: y > 3430 ? "blue" : "black" }}
          >
            10 kind hooks
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollColor;
