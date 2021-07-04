import React, { useState, useEffect } from "react";

const LoadingTitle = () => {
  const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    return setTitle;
  };
  const titleUpdater = useTitle("Loading...");
};

export default LoadingTitle;
