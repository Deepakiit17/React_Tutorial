import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "anil",
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  render() {
    console.warn("render");
    return (
      <div className="App">
        <h1>componentDidMount in React {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Sidhu" })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
