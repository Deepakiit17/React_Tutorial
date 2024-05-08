import { useState } from "react";
import "./App.css";
import Student from "./Student";

function App() {
  const [name, setName] = useState("Anil");
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student name={name} />
      <button
        onClick={() => {
          setName("Sidhu");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default App;
