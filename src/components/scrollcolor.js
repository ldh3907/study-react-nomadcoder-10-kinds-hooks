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
      //console.log(window.scrollY);
      //4216
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
          <div className="scrollcolor-content-wrap">
            <div
              className="scrollcolor-text"
              style={{
                color: y > 3430 ? (y > 4216 ? "black" : "blue") : "black",
              }}
            >
              10 kind hooks
            </div>
            <div className="scrollcolor-process">스크롤 해보세요</div>
            <div className="scrollcolor-explain">
              useState, useEffect, useScroll 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollColor;
