import { Stack, Typography } from "@mui/material";
import React from "react";

import "./EventPageLayout.scss";

const EventPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography id="hpl_h1" variant="h1">
        EventPage
      </Typography>
    </Stack>
  );
};

export default EventPageLayout;
