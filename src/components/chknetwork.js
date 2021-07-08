import { useState, useEffect, useRef } from "react";
import "./chknetwork.css";

const CheckNetwork = () => {
  const [alert, setAlert] = useState("");

  const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
    };
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
  };

  const onLine = useNetwork();

  return (
    <section id="chknetwork">
      <div className="chknetwork-container">
        <div className="chknetwork-wrap">
          <div className="chknetwork-title">Check Network</div>
          <div className="chknetwork-content-wrap">
            <div className="chknetwork-alert">
              {onLine ? "온라인 상태입니다" : "오프라인 상태입니다"}
            </div>
            <div class="chknetwork-process">
              와이파이를 해제 하고 새로고침을 해보세요
            </div>
            <div className="chknetwork-explain">
              useState, useEffect, useNetwork 훅을 사용하여 만들었습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckNetwork;
