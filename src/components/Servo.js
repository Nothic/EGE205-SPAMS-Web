import Slider from "./ServoSlider";
import socket from "./SocketConnect.js";
import { LockOpenIcon } from "@heroicons/react/solid";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";

function pingServo(count) {
  //send signal to bbbw board
  socket.emit("ping servo", count);
}

function Servo() {
  let servoSwitch = <LockOpenIcon />;
  const [count, setCount] = useState(0);
  if (count === 1) {
    servoSwitch = <LockClosedIcon />;
  }

  return (
    <div className="bg-emerald-200 rounded-b-md shadow-xl">
      <div id="lockStatus">{servoSwitch}</div>
      <div className="flex justify-center bg-emerald-600">
        <button
          id="ping servo"
          onClick={() => {
            setCount(1);
            pingServo(count);
          }}
          className="bg-emerald-500 rounded-md m-1 p-1"
        >
          Lock
        </button>

        <button
          id="ping servo"
          onClick={() => {
            setCount(0);
            pingServo(count);
          }}
          className="bg-red-400 rounded-md m-1 p-1"
        >
          Unlock
        </button>
      </div>
      <div className="flex justify-evenly items-center bg-emerald-600 rounded-b-md p-1">
        <div>Servo Angle</div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Servo;
