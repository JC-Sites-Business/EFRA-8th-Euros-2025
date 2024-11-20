import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

import "./InformationPageFacilites.scss";

const InformationPageFacilites: React.FC = (): JSX.Element => {
  return (
    <Stack className="info-container">
      <Typography variant="h3">Facilites</Typography>
      <List>
        <ListItem>Covered pit area</ListItem>
        <ListItem>Raised pitlane</ListItem>
        <ListItem>Rostrum centre</ListItem>
        <ListItem>Variety of Hot and cold food served trackside</ListItem>
        <ListItem>new cafe area/viewing</ListItem>
        <ListItem>On site camping</ListItem>
        <ListItem>On site parking</ListItem>
        <ListItem>On site shower block and seperate toilets</ListItem>
        <ListItem>Live monitors displaying the lap timing</ListItem>
        <ListItem>Designated tyre truing area</ListItem>
        <ListItem>Designated engine prep area</ListItem>
        <ListItem>Designated car/shell cleaning area</ListItem>
        <ListItem>Designated tyre control centre</ListItem>
        <ListItem>240v outlets through the pit area</ListItem>
      </List>
    </Stack>
  );
};

export default InformationPageFacilites;
