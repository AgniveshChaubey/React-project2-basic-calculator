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
      e.preventDefault();
    // Add the code for the resetInput function 
    inputRef.current.value = null;
  };

  function resetResult(e) {
      e.preventDefault();
      // Add the code for the resetResult function 
      setResult(0);
    };

    return (
      <div className="App container">
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
          <button className="btn btn-outline-success" onClick={plus}>Add</button>
          <button className="btn btn-outline-success" onClick={minus}>Subtract</button>
          <button className="btn btn-outline-success" onClick={times}>Multiply</button>
          <button className="btn btn-outline-success" onClick={divide}>Divide</button>
          <button className="btn btn-outline-danger" onClick={resetInput}>Reset input</button>
          <button className="btn btn-outline-danger" onClick={resetResult}>Reset result</button>
        </form>
      </div>
    );
}

export default App;