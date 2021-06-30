import { useState } from "react";

const Count = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <section id="count-container">
      <h1>{item}</h1>
      <button type="button" onClick={incrementItem}>
        +1
      </button>
      <button type="button" onClick={decrementItem}>
        -1
      </button>
      <h2>Current Number</h2>
    </section>
  );
};

export default Count;
