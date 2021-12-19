import { StatusOnlineIcon } from "@heroicons/react/solid";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import socket from "./SocketConnect.js";

function Motion() {
  const [motion, setMotion] = useState(<StatusOnlineIcon />);
  useEffect(() => {
    socket.on("Panel_Update", (motionFlag) => {
      if (motionFlag === 1) {
        setMotion(<ExclamationCircleIcon />);
        console.log("motion update");
        
      } else {
        setMotion(<StatusOnlineIcon />);
        console.log("no motion update");
      }
    });
  });
  return <div className="bg-emerald-200 rounded-b-md shadow-xl">{motion}</div>;
}

export default Motion;
