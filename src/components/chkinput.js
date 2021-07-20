import { useState } from "react";
import "./chkinput.css";

const CheckInput = () => {
  const useInput = (initialValue, length) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(" ");
    const onChange = (event) => {
      console.log(event);
      const {
        target: { value },
      } = event;
      console.log(value);
      //   const obj = { a: 1, b: 2, c: 3 };
      //   const { b } = obj;
      //   console.log(b);

      let willupdate = true;
      if (typeof validator === "function") {
        willupdate = maxLen(value); //validator(value);
      }
      if (willupdate) {
        setValue(value);
        setError(" ");
      } else {
        // error = "10글자를 넘었습니다.";
        setError("10글자를 넘었습니다");
      }
    };
    return { value, onChange, error };
  };

  const maxLen = (value) => value.length <= 10;
  const name = useInput(" ", maxLen);

  return (
    <section id="chkinput">
      <div className="chkinput-container">
        <div className="chkinput-wrap">
          <div className="chkinput-title">Check Input</div>
          <div className="chkinput-content-wrap">
            <input
              className="chkinput-inputbox"
              placeholder="아무거나 적으세요."
              {...name}
            />
            <div className="chkinput-error">{name.error}</div>
            <div className="chkinput-explains">
              <div className="chkinput-process">입력해주세요</div>
              <div className="chkinput-explain">
                useState 훅을 사용하여 만들었습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInput;
