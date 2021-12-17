import ToggleSwitch from "./ToggleSwitch";
import socketio, { io } from "socket.io-client";

function pingServo() {
  var socket = io("http://localhost:3001/");
  var buttonServo = document.getElementById('ping servo')
  console.log("Button pressed");

//   form.addEventListener('')
}

function Servo() {
  return (
    <div className="bg-emerald-100 rounded-b-md">
      <ToggleSwitch />
      <button id='ping servo'
        onClick={pingServo()}
        className="bg-emerald-500 rounded-md m-1 p-1"
      >
        Ping Server
      </button>
    </div>
  );
}

export default Servo;
