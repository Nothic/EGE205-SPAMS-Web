import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import socket from "./SocketConnect.js";

function Buzzer() {

  const [buzzerState, setBuzzer] = useState(<VolumeOffIcon />);
  useEffect(() => {
    socket.on("Panel_Update", (motionFlag) => {
      if (motionFlag === 1) {
        setBuzzer(<VolumeUpIcon />);
        socket.emit("BBBW1_buzzerOn", 90);
        console.log("buzzer trip!");
        
      } else {
        setBuzzer(<VolumeOffIcon />);
        socket.emit("BBBW1_buzzerOn", 0);
        console.log("buzzer armed!");
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
