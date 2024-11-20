import { Stack, Typography } from "@mui/material";
import React from "react";

import "./InformationPageHotels.scss";

const InformationPageHotels: React.FC = (): JSX.Element => {
  return (
    <Stack className="info-container">
      <Typography variant="h3">Hotels</Typography>
    </Stack>
  );
};

export default InformationPageHotels;
