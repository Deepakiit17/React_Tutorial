import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("Anil");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("Sidhu")}>Update Data</button>
    </div>
  );
}

export default App;
