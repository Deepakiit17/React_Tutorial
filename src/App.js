import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Anil",
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World {this.state.data}</h1>
      </div>
    );
  }
}

export default App;
