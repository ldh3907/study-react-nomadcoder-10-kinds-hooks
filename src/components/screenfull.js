import { useState, useRef, useEffect } from "react";
import "./screenful.css";
import image from "../img/hook.png";

const ScreenFul = () => {
  const useFullScreen = () => {
    const element = useRef();
    const fulTrigger = () => {
      if (element.current) {
        element.current.requestFullscreen();
      }
    };
    const exitFulScreen = () => {
      document.exitFullscreen();
    };
    return { element, fulTrigger, exitFulScreen };
  };

  const { element, fulTrigger, exitFulScreen } = useFullScreen();

  return (
    <section id="screenful">
      <div className="screenful-container">
        <div className="screenful-wrap">
          <div ref={element} className="screenful-content">
            <img src={image} className="screenful-img" />
            <button onClick={fulTrigger}>Full Screen</button>
            <button onClick={exitFulScreen}>Small Screen</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenFul;
