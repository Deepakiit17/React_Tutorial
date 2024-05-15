import React from "react";
import "./App.css";
import Unmount from "./Components/Unmount";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="App">
        <h1>componentWillUnmount in React </h1>
        {this.state.show ? <Unmount /> : <h1>Child Component Removed</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}

export default App;
