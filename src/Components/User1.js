import React from "react";

class User1 extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "anil@test.com",
    };
  }
  render() {
    console.warn("Render method", this.state.email);
    return (
      <div>
        <h1>User1 Component</h1>
        <button onClick={() => this.setState({ email: "sidhu@test.com" })}>
          Update Email
        </button>
      </div>
    );
  }
}

export default User1;
