import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import socket from "./SocketConnect.js";

function Buzzer() {
  const [buzzerState, setBuzzer] = useState(<VolumeOffIcon />);

  useEffect(() => {
    socket.on("Panel_Buzz", (motionFlag) => {
      if (motionFlag === 1) {
        setBuzzer(<VolumeUpIcon />);
       // console.log("motion update");
        socket.emit("BBBW1_buzzerOn", 90);
        //socket.close();
      } else {
        setBuzzer(<VolumeOffIcon />);
      //  console.log("no motion update");
        socket.emit("BBBW1_buzzerOn", 0);
        //socket.close();
      }
    });
  },[]);

  return (
    <>
      <div className="bg-emerald-200 rounded-b-md shadow-xl">
        <div>{buzzerState}</div>
      </div>
    </>
  );
}

export default Buzzer;
