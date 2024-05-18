import { useRef } from "react";
import "./App.css";

function App() {
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    console.warn("input field 1 value : ", inputRef.current.value);
    console.warn("input field 2 value : ", inputRef2.current.value);
    let input3 = document.getElementById("input3").value;
    console.warn("input field 2 value : ", input3);
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component in React </h1>
      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} /> <br /> <br />
        <input type="text" ref={inputRef2} /> <br /> <br />
        <input type="text" id="input3" /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
