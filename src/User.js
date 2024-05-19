import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id, name } = useParams();

  console.warn(id);

  return (
    <div>
      <h1>Hi this is user no {id}</h1>
      <h1>Hi this is {name}</h1>
    </div>
  );
}

export default User;

// import { withRouter } from "react-router-dom";
// function User(props) {
//   console.warn(props.match.params.id);
//   return (
//     <div>
//       <h1>Hi this is user no {props.match.params.id}</h1>
//       <h1>Hi this is {props.match.params.name}</h1>
//     </div>
//   );
// }

// export default withRouter(User);
