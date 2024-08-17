import { Stack } from "@mui/material";
import React from "react";

import "./navBar.css";
import { NavBarItems } from "./NavBarItems";

const NavBar: React.FC = () => {
  return (
    <Stack id="navBar-Main" direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <NavBarItems />
    </Stack>
  );
};

export default NavBar;
