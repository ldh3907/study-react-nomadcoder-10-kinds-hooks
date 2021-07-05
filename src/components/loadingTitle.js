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
  return (
    <section id="LoadingTitle">
      <div className="loadingtitle-container"></div>
    </section>
  );
};

export default LoadingTitle;
