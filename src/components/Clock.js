import { useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div>
      <h2>
        {props.poo}
        {time.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
