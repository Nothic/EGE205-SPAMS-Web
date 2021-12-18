import { StatusOnlineIcon } from "@heroicons/react/solid";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Motion() {
  var socket = io("http://localhost:3001/");
  const [motion, setMotion] = useState(<StatusOnlineIcon />);
  useEffect(() => {
    socket.on("Panel_Update", (motionFlag) => {
      if (motionFlag === 1) {
        setMotion(<ExclamationCircleIcon />);
        console.log("motion update");
        socket.disconnect();
      } else {
        setMotion(<StatusOnlineIcon />);
        console.log("no motion update");
        socket.disconnect();
      }
    });
  });
  return <div className="bg-emerald-200 rounded-b-md shadow-xl">{motion}</div>;
}

export default Motion;
