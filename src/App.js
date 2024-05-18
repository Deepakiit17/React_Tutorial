import { useState } from "react";
import "./App.css";

function App() {
  let [val, setVal] = useState("111");
  return (
    <div className="App">
      <h1>Controlled Component in React </h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <h3>value {val}</h3>
    </div>
  );
}
export default App;
