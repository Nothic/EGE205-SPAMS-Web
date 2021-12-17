import Control from "./Control.js";
import Servo from "./Servo.js";
import { motion } from "framer-motion";

function Display() {
  return (
    <>
      <div className="bg-emerald-800 border-5-li h-max text-center m-5 rounded-md shadow-md">
        <div className="bg-emerald-600 rounded-t-md p-1 font-semibold ">
          Sensor Label
        </div>
        <div className="flex justify-around ">
          <motion.div drag className="basis-1/3 m-3 ">
            <Control className="basis-1/3" controlType="Servo Lug" />
            <Servo />
          </motion.div>
          <motion.div drag className="basis-1/3 m-3 ">
            <Control className="basis-1/3" controlType="Buzzer" />
            
          </motion.div>
          <motion.div drag className="basis-1/3 m-3  ">
            <Control className="basis-1/3" controlType="Users" />
            
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Display;