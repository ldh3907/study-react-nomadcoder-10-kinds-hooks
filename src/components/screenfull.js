import { useState, useRef, useEffect } from "react";

const ScreenFul = () => {
  const useFullScreen = () => {
    const element = useRef();
    const fulTrigger = () => {
      if (element.current) element.current.requestFullScreen();
    };

    return { element, fulTrigger };
  };

  const { element, fulTrigger } = useFullScreen();

  return (
    <section id="screenful">
      <div className="screenful-container">
        <img ref={element} className="screenful-wrap" />
        <button onClick={fulTrigger}>Full Screen</button>
      </div>
    </section>
  );
};
