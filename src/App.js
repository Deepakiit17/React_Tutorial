import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.warn("componentDidUpdate", preState.count, this.state.count);
    if (preState.count === this.state.count) {
      alert("data is already same");
    }
  }
  render() {
    // console.warn("render");
    return (
      <div className="App">
        <h1>componentDidUpdate in React {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Update Name</button>
      </div>
    );
  }
}

export default App;
