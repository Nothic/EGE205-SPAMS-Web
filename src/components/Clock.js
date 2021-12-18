import { useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div>
      <h1>Hello {props.poo}</h1>
      <h2>It is {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
