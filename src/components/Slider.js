import { motion } from "framer-motion";
import { useRef } from "react";
let dragCon

function Slider() {
    const constraintsRef = useRef(null);
  return (
    <div>
      <div className="px-[60px] bg-pink-700 rounded-xl border-8" ref={constraintsRef}>
        <motion.div
          className="bg-white h-[20px] w-[20px] rounded-full"
          drag="x"
          dragConstraints={constraintsRef}
        ></motion.div>
      </div>
    </div>
  );
}

export default Slider;
