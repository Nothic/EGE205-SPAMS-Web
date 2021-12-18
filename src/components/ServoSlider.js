import socketio, { io } from "socket.io-client";
import React from "react";
import { useState } from "react";

function ServoSlider() {
  var socket = io("http://localhost:3001/");
  const [angle, setAngle] = useState(50);
  const handleChange = (e) => {
    setAngle(e.target.value);
    console.log(angle);
    socket.emit("BBBW1_ServoAngle", e.target.value);
  };

  return (
    <div className="flex">
      <input
        type="range"
        min="5"
        max="100"
        step="5"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="m-[5px]">{angle}</div>
    </div>
  );
}

export default ServoSlider;
