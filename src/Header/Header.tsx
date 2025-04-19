import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconBinoculars, IconSettings } from "@tabler/icons-react";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="bg-mine-shaft-950 w-full h-20 text-white flex justify-between items-center p-2">
      <div className=" flex items-center gap-2 text-bright-sun-400 ">
        <IconBinoculars stroke={1} className="h-10 w-10" />
        <h1 className=" text-2xl font-semibold ">PathForge</h1>
      </div>

        <NavLinks/>
        <div className=" flex gap-6 items-center justify-content-center">
        
      <div className="flex gap-3 items-center">
        <div>
          Yuvi
        </div>
        <Avatar src="image.png" alt="it's me" />
      </div>
      <div className="bg-mine-shaft-900 rounded-full p-1.5">
      <IconSettings/>

      </div>
      <div className="bg-mine-shaft-900 rounded-full p-1.5">
      <Indicator  color="red" size={9} processing>
      <IconBell/>
      </Indicator>
   
      </div>

        </div>

    </div>
  );
};

export default Header;
