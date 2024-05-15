import React from "react";

class Unmount extends React.Component {
  componentWillUnmount() {
    console.warn("componentWillUnmount called");
  }
  render() {
    return (
      <div>
        <h1>Unmount Component</h1>
      </div>
    );
  }
}

export default Unmount;
