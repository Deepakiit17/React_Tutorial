import "./App.css";
import React, { useState } from "react";
import User from "./User";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <User count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
        Update counter
      </button>
    </div>
  );
}
export default App;
