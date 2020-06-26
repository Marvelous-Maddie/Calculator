import React, { useState } from "react";
import "../styles/calculator.css";

/*
document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => (calculatorScreen.innerHTML = ""));
  */

export default () => {
  const [screen, updateScreen] = useState("");

  const handleClick = event => {
    updateScreen(screen + event.currentTarget.innerHTML);
  };

  return (
    <div className="calculator">
      <div id="calculator">
        <div className="top">
          <span className="clear">C</span>
          <div className="screen">{screen}</div>
        </div>
        <div className="keys">
          <span onClick={handleClick}>7</span>
          <span onClick={handleClick}>8</span>
          <span onClick={handleClick}>9</span>
          <span className="operator" onClick={handleClick}>
            +
          </span>
          <span onClick={handleClick}>4</span>
          <span onClick={handleClick}>5</span>
          <span onClick={handleClick}>6</span>
          <span className="operator" onClick={handleClick}>
            -
          </span>
          <span onClick={handleClick}>1</span>
          <span onClick={handleClick}>2</span>
          <span onClick={handleClick}>3</span>
          <span className="operator" onClick={handleClick}>
            /
          </span>
          <span onClick={handleClick}>0</span>
          <span onClick={handleClick}>.</span>
          <span className="eval">=</span>
          <span className="operator" onClick={handleClick}>
            x
          </span>
        </div>
      </div>
    </div>
  );
};
