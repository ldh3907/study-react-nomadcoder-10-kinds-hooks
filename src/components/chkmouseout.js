import { useState, useEffect } from "react";
import "./chkmouseout.css";

const CheckMouseOut = () => {
  const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        const input = window.confirm(
          "왜 마우스가 탭창으로 가시나요? 나가실건가요?"
        );
        if (input === true) {
          window.close();
          console.log("나감");
        } else if (input !== true) {
          console.log("안나감");
        }
      }
    };

    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };

  const begForLife = () => {
    console.log("pls dont leave");
  };
  useBeforeLeave(begForLife);

  return (
    <section id="chkmouseout">
      <div className="chkmouseout-container"></div>
    </section>
  );
};

export default CheckMouseOut;
