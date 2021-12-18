import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Buzzer() {
  var socket = io("http://localhost:3001/");

  const [buzzerState, setBuzzer] = useState(<VolumeOffIcon />);
  useEffect(() => {
    socket.on("Panel_Update", (motionFlag) => {
      if (motionFlag === 1) {
        setBuzzer(<VolumeUpIcon />);
        socket.emit("BBBW1_buzzerOn", 90);
        console.log("buzzer trip!");
        socket.disconnect();
      } else {
        setBuzzer(<VolumeOffIcon />);
        socket.emit("BBBW1_buzzerOn", 0);
        console.log("buzzer armed!");
        socket.disconnect();
      }
    });
  });
  return (
    <>
      <div className="bg-emerald-200 rounded-b-md shadow-xl">
        <div>{buzzerState}</div>
      </div>
    </>
  );
}

export default Buzzer;
