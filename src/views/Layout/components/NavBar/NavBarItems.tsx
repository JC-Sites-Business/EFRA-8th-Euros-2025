import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useIntl } from "react-intl";
import { Link, NavLink } from "react-router-dom";
import navBarData from "../../../../common/assets/navbar.json";
import { useIntlCommon } from "../../../../common/lang/intl-common/index";

export type T_NavBarItem = {
  _id: number;
  title: string;
  link: string;
};

export type T_NavBar = {
  headerItems: T_NavBarItem[];
};

export const NavBarItems: React.FC = () => {
  const { siteLabel: header } = useIntlCommon();
  const intl = useIntl();
  const showMobile = useMediaQuery("(max-width: 900px)");
  navBarData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

  const headerItems: T_NavBarItem[] = navBarData;

  return (
    <>
      <NavLink id="navBar-Left" to={"/home"}>
        {header}
      </NavLink>
      <Stack id="navBar-Right" direction={"row"} alignItems={"center"}>
        {!showMobile && <NavFullScreen headerItems={headerItems} />}
        {showMobile && <NavMobile headerItems={headerItems} />}
      </Stack>
    </>
  );
};

const NavFullScreen: React.FC<T_NavBar> = ({ headerItems }) => {
  return (
    <>
      {headerItems?.map((item) => (
        <NavLink
          key={`navBarFull_${item.title}`}
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to={item.link}
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

const NavMobile: React.FC<T_NavBar> = ({ headerItems }) => {
  const [drawState, setDrawState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawState(() => open);
  };

  const list = (
    <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {headerItems?.map((item) => (
          <ListItem key={`navBarMob_${item.title}l`} disablePadding>
            <ListItemButton key={`navBarMob_${item.title}b`} component={Link} to={item.link}>
              <ListItemText key={`navBarMob_${item.title}t`} primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <FaBars id="barsIcon" />
      </Button>
      <SwipeableDrawer anchor={"right"} open={drawState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list}
      </SwipeableDrawer>
    </>
  );
};

export default NavBarItems;
