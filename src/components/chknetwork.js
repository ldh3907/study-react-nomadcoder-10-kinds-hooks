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
        <div className="chknetwork-alert">
          {onLine ? "온라인 상태입니다" : "오프라인 상태입니다"}
        </div>
      </div>
    </section>
  );
};

export default CheckNetwork;
