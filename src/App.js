import React from "react";
import "./App.css";
import Student from "./Student";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Anil",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Props in Class Component</h1>
        <Student name={this.state.name} email="anil@test.com" />
        <button onClick={() => this.setState({ name: "Sidhu" })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
