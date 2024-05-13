import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.count);
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>shouldComponentUpdate in React {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Counter
        </button>
      </div>
    );
  }
}

export default App;
