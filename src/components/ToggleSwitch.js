import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function ToggleSwitch(props) {
  const [isOn, setIsOn] = useState(false);

  function sendToggleState() {
    props.sendState(!isOn);
  }

  const toggleSwitch = () => {
    setIsOn(!isOn);
    sendToggleState();
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="h-[26px] w-[50px] m-[10px]">
      <div
        className={
          isOn
            ? "p-[3px] rounded-full flex justify-end bg-emerald-600 shadow-xl"
            : "p-[3px] rounded-full flex justify-start bg-red-300 shadow-xl"
        }
        onClick={toggleSwitch}
      >
        <motion.div
          className="bg-white h-[20px] w-[20px] rounded-full"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
}

export default ToggleSwitch;
