import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("work 1");
  });
  return (
    <div className="App">
      <h1>
        useEffect in React <br /> {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
