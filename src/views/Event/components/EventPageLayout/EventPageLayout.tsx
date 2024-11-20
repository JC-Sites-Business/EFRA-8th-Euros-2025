import { Stack, Typography } from "@mui/material";
import React from "react";

import "./EventPageLayout.scss";

const EventPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h3">EventPage</Typography>
    </Stack>
  );
};

export default EventPageLayout;
