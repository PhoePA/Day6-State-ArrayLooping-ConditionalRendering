import { useState } from "react";

function Student(props) {
  const [name, setName] = useState(props.name);
  let live = props.live;

  return (
    <div className="box">
      <p>Name: {name}</p>
      <p>Live: {live}</p>
    </div>
  );
}

export default Student;
