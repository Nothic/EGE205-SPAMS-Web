import { StatusOnlineIcon } from "@heroicons/react/solid";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { io } from "socket.io-client";

function Motion() {
  var socket = io("http://localhost:3001/");
  const [motion, setMotion] = useState(<StatusOnlineIcon />);
  socket.on("BBBW1_Motion", (motionFlag) => {
    if (motionFlag === 1) {
      setMotion(<ExclamationCircleIcon />);
      console.log("Changing image!");
    }
    else{
        setMotion(<StatusOnlineIcon />);
    }
  });
  return <div className="bg-emerald-200 rounded-b-md shadow-xl">{motion}</div>;
}

export default Motion;
