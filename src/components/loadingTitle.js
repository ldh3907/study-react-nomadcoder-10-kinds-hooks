import React, { useState, useEffect } from "react";
import "./loadingtitle.css";

const LoadingTitle = () => {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("10 Hooks"), 5000);
  return (
    <section id="LoadingTitle">
      <div className="loadingtitle-container">
        <div className="loadingtitle-wrap">
          <div className="loadingtitle-title">Loading Title</div>
          <div className="loadingtitle-content-wrap">
            <div className="loadingtitle-express">
              새로고침을 누르면 타이틀이 로딩됩니다.
            </div>
            <div className="loadingtitle-explain">
              useEffect 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingTitle;
