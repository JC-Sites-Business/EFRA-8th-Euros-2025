import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useIntl } from "react-intl";
import { NavLink, useLocation } from "react-router-dom";
import informationNavData from "../../../../common/assets/data/informationNav.json";
import { T_NavBarItem } from "../../../Layout/components/NavBar/NavBarItems";
import InformationPageFacilites from "../InformationPageFacilites/InformationPageFacilites";
import InformationPageHotels from "../InformationPageHotels/InformationPageHotels";
import InformationPageTravel from "../InformationPageTravel/InformationPageTravel";
import InformationPageVRC from "../InformationPageVRC/InformationPageVRC";

import "./InformationPageLayout.scss";

const InformationPageLayout: React.FC = (): JSX.Element => {
  const location = useLocation();
  const intl = useIntl();
  informationNavData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

  const infoItems: T_NavBarItem[] = informationNavData;
  const currentInfo = location.pathname.slice(location.pathname.lastIndexOf("/"), location.pathname.length);

  return (
    <Box>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack direction={"row"} justifyContent={"space-evenly"} className="info-bottons-container">
          {infoItems?.map((item) => (
            <NavLink
              key={`infoButton_${item.title}`}
              className={({ isActive }) =>
                isActive || (currentInfo === "/information" && item.title === "Facilities") ? "activeLink" : ""
              }
              to={item.link}
            >
              <Button variant="contained" className="info-bottons">
                {item.title}
              </Button>
            </NavLink>
          ))}
        </Stack>
      </Stack>
      {(currentInfo === "/facilities" || currentInfo === "/information") && <InformationPageFacilites />}
      {currentInfo === "/hotels" && <InformationPageHotels />}
      {currentInfo === "/travel" && <InformationPageTravel />}
      {currentInfo === "/vrc" && <InformationPageVRC />}
    </Box>
  );
};

export default InformationPageLayout;
