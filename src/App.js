import "./App.css";
import React, { useState } from "react";
import * as math from "mathjs";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((prevText) => prevText + val + " ");
  };

  const calculateResult = () => {
    const input = text.replace(/\s+/g, ""); // Remove spaces
    const result = math.evaluate(input); // Evaluate the input string
    setResult(result); // Set the result state
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  const clearLastInput = () => {
    setText(prevText => prevText.slice(0, -1));
  }

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
        <Button symbol="clear all" color="red" handleClick={resetInput} />
        <Button symbol="Ac" color="green" handleClick={clearLastInput} />
        </div>
        
      </div>
    </div>
  );
};

export default App;
