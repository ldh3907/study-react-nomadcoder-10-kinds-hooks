import { useState } from "react";
import "./confirmexit.css";

const ConfirmExit = () => {
  const [error, setError] = useState("");
  const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => {
      window.addEventListener("beforeunload", listener);
      setError("보호상태");
    };
    const disablePrevent = () => {
      window.removeEventListener("beforeunload", listener);
      setError("보호해제상태");
    };
    return { enablePrevent, disablePrevent };
  };
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <section id="confirmexit">
      <div className="confirmexit-container">
        <div className="confirmexit-wrap">
          <div className="confirmexit-title">Confirm Exit</div>
          <div className="confirmexit-content-wrap">
            <div className="confirm-button-wrap">
              <button className="confirmexit-button" onClick={enablePrevent}>
                보호
              </button>
              <button className="confirmexit-button" onClick={disablePrevent}>
                미보호
              </button>
            </div>
            <div className="confirmexit-alert">{error}</div>
            <div className="confirmexit-express">버튼을 눌러주세요</div>
            <div className="confrimexit-explain">
              useState, usePreventLeave 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmExit;
