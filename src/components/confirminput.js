import React, { useState, useEffect, useRef } from "react";
import "./confirminput.css";

const ConfirmInput = () => {
  const [alret, setAlret] = useState(" ");
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
  const deleteWorld = () => {
    console.log("연결을 해제합니다.");
    setAlret("연결을 해제합니다");
  };
  const abort = () => {
    console.log("연결을 유지합니다.");
    setAlret("연결을 유지합니다");
  };
  const confrimDelete = useConfirm(
    "정말 해제 하시겠습니까?",
    deleteWorld,
    abort
  );
  return (
    <section id="confirminput">
      <div className="confirminput-container">
        <div className="confirminput-wrap">
          <div className="confirminput-title">Confirm Input</div>
          <div className="confirminput-content-wrap">
            <button className="confirminput-button" onClick={confrimDelete}>
              연결끊기
            </button>
            <div className="confirminput-alert">{alret}</div>
            <div className="confirminput-express">버튼을 눌러주세요</div>
            <div className="confirminput-explain">
              useState, useEffect 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmInput;
