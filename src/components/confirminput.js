import React, { useState, useEffect, useRef } from "react";
import "./confirminput.css";

const ConfirmInput = () => {
  const useConfirm = (message = "", callback, rejection) => {
    if (typeof callback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
    return confirmAction;
  };
  const deleteWorld = () => console.log("연결을 해제합니다");
  const abort = () => console.log("연결을 유지합니다");
  const confrimDelete = useConfirm(
    "정말 해제 하시겠습니까?",
    deleteWorld,
    abort
  );
  return (
    <section id="confirminput">
      <div className="confirminput-container">
        <button onClick={confrimDelete}>Delete the world</button>
      </div>
    </section>
  );
};

export default ConfirmInput;
