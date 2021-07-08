import { useState, useEffect, useRef } from "react";
import "./fadetext.css";

const FadeText = () => {
  const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    console.log(element);
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, []);
    return { ref: element, style: { opacity: 0 } };
  };

  const EffectText = useFadeIn(2, 1);
  const EffectSubtext = useFadeIn(2, 2);
  return (
    <section id="fadetext">
      <div className="fadetext-container">
        <div className="fadetext-wrap">
          <div className="fadetext-title">Fade In Text</div>
          <div className="fadetext-content-wrap">
            <div className="fadetext-text" {...EffectText}>
              10 Kind hooks page
            </div>
            <div className="fadetext-subtext" {...EffectSubtext}>
              This is the result of my studies.
            </div>
            <div className="fadetext-process">새로고침을 해보세요</div>
            <div className="fadetext-explain">
              useRef, useEffect, useFadeIn 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FadeText;
