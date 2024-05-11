import { useState } from "react";
import "./App.css";
import User1 from "./Components/User1";

function App() {
  const [name, setName] = useState("Anil");

  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <User1
      //  name={name}
      />
      {/* <button onClick={() => setName("Sidhu")}>Update Name</button> */}
    </div>
  );
}

export default App;
