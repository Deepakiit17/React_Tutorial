import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.warn("componentDidUpdate", snapshot);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  render() {
    console.warn("render");
    return (
      <div className="App">
        <h1>componentDidUpdate in React {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>Update Name</button>
      </div>
    );
  }
}

export default App;
