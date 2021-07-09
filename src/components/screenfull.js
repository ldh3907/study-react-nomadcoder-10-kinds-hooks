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
          <div className="screenful-title">Screen Full</div>
          <div className="screenful-content-wrap">
            <div ref={element} className="screenful-content">
              <img src={image} className="screenful-img" />
              <div className="screenful-button-wrap">
                <button className="screenful-button" onClick={fulTrigger}>
                  <div className="screenful-button-text">크게 보기</div>
                </button>
                <button className="screenful-button" onClick={exitFulScreen}>
                  <div className="screenful-button-text">작게 보기</div>
                </button>
              </div>
            </div>
            <div className="screenful-process">버튼을 눌러주세요</div>
            <div className="screenful-explain">
              useRef, useFullScreen 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenFul;
