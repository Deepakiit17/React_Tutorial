import "./App.css";
import User from "./Components/User";

function App() {
  function getData() {
    alert("hello from app");
  }
  return (
    <div className="App">
      <h1>Pass function as Props !</h1>
      <User data={getData} />
    </div>
  );
}

export default App;
