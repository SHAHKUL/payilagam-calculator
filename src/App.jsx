import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState([]);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleCount = () => {
    if (count.length >= 5) {
      setMessage("You can enter only 5 number");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setText("");
      return;
    }

    const val = Number(text);
    setCount([...count, val]);
    setText("");
  };

  const handleClear = () => {
    setCount([]);
    setMessage("");
  };

  const handleAverage = () => {
    if (count.length < 5) {
      setMessage("You have to enter 5 Number");
      return;
    }
    const total = count.reduce((acc, cur) => (acc += cur), 0);
    const average = `Total Average is ${total / 5}`;
    setMessage(average);
  };

  const handleGrade = () => {
    const copy = count.slice();
    for (var i of copy) {
      if (i < 35) {
        setMessage("Could'd calculate the grade for less than 35 Mark");
        return;
      }
    }
    if (count.length < 5) {
      setMessage("You have to enter 5 Number");
      return;
    }

    const score = count.reduce((acc, cur) => (acc += cur), 0);
    const average = score / 5;

    if (average >= 90) {
      setMessage("You Grade is A");
      return;
    }
    if (average >= 80) {
      setMessage("You Grade is B");
      return;
    }
    if (average >= 70) {
      setMessage("You Grade is C");
      return;
    }

    if (average >= 60) {
      setMessage("You Grade is D");
      return;
    }
  };

  const handleTotal = () => {
    if (count.length < 5) {
      setMessage("You have to enter 5 Number");
      return;
    }
    const total = count.reduce((acc, cur) => (acc += cur), 0);
    const average = `Total Mark is ${total}`;
    setMessage(average);
  };

  return (
    <div className="mark-calculator">
      <div className="mark-calculator-main">
        <div className="mark-calculator-main-box">
          {count.map((cur, idx) => (
            <div key={idx} className="mark-calculator-number-box">
              {cur}
            </div>
          ))}
        </div>

        <div className="mark-calculator-main-box-input">
          <input
            value={text}
            type="number"
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0 && value <= 100) {
                setText(e.target.value);
              }
            }}
            className="mark-calculator-number-input"
          />
        </div>
        <div className="mark-calculator-main-button-group">
          <button className="mark-calculator-main-btn" onClick={handleCount}>
            Add
          </button>
          <button className="mark-calculator-main-btn" onClick={handleClear}>
            Clear
          </button>
          <button className="mark-calculator-main-btn" onClick={handleAverage}>
            Average
          </button>
          <button className="mark-calculator-main-btn" onClick={handleGrade}>
            Grade
          </button>
          <button className="mark-calculator-main-btn" onClick={handleTotal}>
            Total
          </button>
        </div>

        <div className="mark-calculator-message-container">
          <h1 className="mark-calculator-message-title">Message</h1>
          <div className="mark-calculator-message-input">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
