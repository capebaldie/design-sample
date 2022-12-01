import React from "react";
import { TiGroup } from "react-icons/ti";
import { BiCategory } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { MdAssistant } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { RiBuildingFill } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";

const SideNavBar = () => {
  return (
    <main className="flex h-auto">
      <div className="bg-black flex flex-col items-center w-[4rem] h-full justify-between">
        <div className="bg-[#E30520] h-[4rem] w-[4rem] flex items-center justify-center">
          <div className="bg-[#e98d95] rounded-full h-[2.8rem] w-[2.8rem]"></div>
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <BiCategory className="text-white w-auto h-6" />
          <CgShoppingBag className="text-white w-auto h-6" />
          <FiCalendar className="text-white w-auto h-6" />
          <MdAssistant className="text-white w-auto h-6" />
          <TiGroup className="text-yellow-400 w-auto h-6" />
          <RiBuildingFill className="text-white w-auto h-6" />
        </div>

        <div className="flex flex-col items-center gap-4 mb-[14rem]">
          <VscBellDot className="text-white w-auto h-6" />
          <img
            src="../images/2.jpg"
            className=" rounded-full h-[2.5rem] w-[2.5rem]"
          />
        </div>
      </div>
    </main>
  );
};

export default SideNavBar;
