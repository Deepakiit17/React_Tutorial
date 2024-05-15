import { useEffect } from "react";

function UsEffect(props) {
  useEffect(() => {
    alert("count. is"  +  props.count);
  }, [props.count, props.data]);
  return (
    <div>
      <h1>Count Props :{props.count}</h1>
      <h1>Data Props :{props.data}</h1>
    </div>
  );
}

export default UsEffect;
