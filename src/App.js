import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const resultRef = useRef();
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    // Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    // Add the code for the plus function
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) {
  //   e.preventDefault();
    // Add the code for the resetInput function 
    inputRef= null;
  };

  function resetResult(e) {
  //   e.preventDefault();
    // Add the code for the resetResult function 
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset input</button>
        <button onClick={resetResult}>Reset result</button>
      </form>
    </div>
  );
}

export default App; 
