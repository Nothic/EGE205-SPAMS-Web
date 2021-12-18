import Control from "./Control.js";
import Servo from "./Servo.js";
import Buzzer from "./Buzzer.js";
import Motion from "./Motion.js"
import { useRef } from "react";
import { motion } from "framer-motion";

function Display() {
  const constraintsRef = useRef(null);
  return (
    <>
      <div className="bg-emerald-800 border-5-li h-max text-center m-5 rounded-md shadow-md">
        <div className="bg-emerald-600 rounded-t-md p-1 font-semibold ">
          Sensor Label
        </div>
        <div className="flex justify-around " ref={constraintsRef}>
          <motion.div
            // drag
            // dragConstraints={constraintsRef}
            // dragElastic={1}
            className="basis-1/3 m-3 "
          >
            <Control className="basis-1/3" controlType="Canopy Angle" />
            <Servo /> 
          </motion.div>
          <motion.div drag className="basis-1/3 m-3 ">
            <Control className="basis-1/3" controlType="Buzzer" />
            <Buzzer />
          </motion.div>
          <motion.div drag className="basis-1/3 m-3  ">
            <Control className="basis-1/3" controlType="Motion" />
            <Motion/>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Display;
