import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student
        name={"anil"}
        email="anil@test.com"
        other={{ address: "delhi", mobile: 111 }}
      />
      <Student
        name="peter"
        email="peter@test.com"
        other={{ address: "noida", mobile: 222 }}
      />
      <Student
        name="pri"
        email="pri@test.com"
        other={{ address: "gurgaon", mobile: 333 }}
      />
    </div>
  );
}

export default App;
