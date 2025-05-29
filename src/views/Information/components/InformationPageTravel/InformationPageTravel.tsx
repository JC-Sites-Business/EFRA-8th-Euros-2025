import { Link, Stack, Typography } from "@mui/material";
import React from "react";

import "./InformationPageTravel.scss";

const InformationPageTravel: React.FC = (): JSX.Element => {
  return (
    <Stack className="info-container">
      <Typography variant="h3">Travel</Typography>
      <Typography variant="h5">Track Address</Typography>
      <Typography>Halifax RC Race Track</Typography>
      <Typography>Stainland Road</Typography>
      <Typography>Halifax</Typography>
      <Typography>HX4 8LS</Typography>
      <Typography>United Kingdom</Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Airports
      </Typography>
      <Typography>(cheap flights via Ryanair, Wizzair, easyjet & other airlines) </Typography>
      <Typography>Closest airports:- Both around 45 minutes away </Typography>
      <Typography>via car/also train links Leeds Bradford (22 miles) - recommended Manchester (43 miles)</Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Boat (Ferry)
      </Typography>
      <Typography>Rotterdam to Hull is nearest</Typography>
      <Typography>Other ports Zeebrugge Calais, Dunkirk to UK</Typography>
      <Typography variant="h5" sx={{ marginTop: "10px" }}>
        Tunnel
      </Typography>
      <Typography>Drive and use Train via euro tunnel only 35 minutes crossing</Typography>
      <Typography>Calais (France) to Folkestone UK 276 miles to track</Typography>
      <Link href="https://www.eurotunnel.com/uk/" target="_blank">
        https://www.eurotunnel.com/uk/
      </Link>
    </Stack>
  );
};

export default InformationPageTravel;
