import { useState, useEffect, useRef } from "react";
import "./fadetext.css";

const FadeText = () => {
  const useFadeIn = () => {
    const element = useRef();
    return element;
  };

  const el = useFadeIn();
  return (
    <section id="fadetext">
      <div className="fadetext-container">
        <h1>Hello</h1>
      </div>
    </section>
  );
};

export default FadeText;
