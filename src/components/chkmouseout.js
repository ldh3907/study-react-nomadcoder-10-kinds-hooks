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
      <div className="chkmouseout-container">
        <div className="chkmouseout-wrap">
          <div className="chkmouseout-title">Check Mouse Out</div>
          <div className="chkmouseout-content-wrap">
            <div className="chkmouseout-express">
              마우스를 탭창에 놔둬 보세요
            </div>
            <div className="chkmouseout-explain">
              useState, useBeforeLeave 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckMouseOut;
