import { CloudIcon } from "@heroicons/react/solid";
import { CogIcon } from "@heroicons/react/solid";
import { GlobeIcon } from "@heroicons/react/solid";
import { MinusCircleIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const ItemName = ["Weather", "Ambient", "Access Control", "Pest Report"];

function SidebarItem(ItemName, IconName) {
  return (
    <li className="border grow border-transparent p-3 text-gray bg-emerald-600 m-5 rounded-md shadow-md hover:border-emerald-500">
      <button onClick={CheckItem} className="flex">
        <motion.div whileHover={{ scale: 1.4, rotate: 360 }}>
          <IconName className="h-6 w-6 m-2" />
        </motion.div>
        <div className="m-2 font-semibold">{ItemName}</div>
      </button>
    </li>
  );
}

var GlobalPanelType = "State";

function CheckItem() {
  var PanelType = document.getElementsByID("flex").textContent;
  GlobalPanelType = PanelType;
  console.log(GlobalPanelType);
}

function Sidebar() {
  return (
    <>
      <ul className="flex justify-between">
        {SidebarItem("Weather", CloudIcon)}
        {SidebarItem("Ambient", GlobeIcon)}
        {SidebarItem("Access Control", CogIcon)}
        {SidebarItem("Pest Report", MinusCircleIcon)}
      </ul>
      {GlobalPanelType}
    </>
  );
}

export default Sidebar;
