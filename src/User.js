import { useEffect, useRef } from "react";

function User(props) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  });
  const previousProps = lastVal.current;
  return (
    <div>
      <h1>current val {props.count}</h1>
      <h1>previous val {previousProps}</h1>
    </div>
  );
}

export default User;
