import React, { useState } from "react";
import "./App.css";
import Student from "./Student";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      <h1>Get Input box value</h1>
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
