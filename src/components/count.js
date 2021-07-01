import { useState } from "react";
import "./count.css";

const Count = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <section id="count">
      <div className="count-container">
        <div className="count-wrap">
          <div className="count-title">Counter</div>
          <div className="count-content-wrap">
            <div className="count-currentnumber">{item}</div>
            <div className="count-button-wrap">
              <button type="button" className="button" onClick={incrementItem}>
                +1
              </button>
              <button type="button" className="button" onClick={decrementItem}>
                -1
              </button>
            </div>
            <h2>Current Number</h2>
            <h2 className="count-explain">
              useState 훅을 사용하여 만들었습니다.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
