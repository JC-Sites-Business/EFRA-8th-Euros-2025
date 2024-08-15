import { Stack, Typography } from "@mui/material";
import React from "react";

import "./AboutPageLayout.scss";

const AboutPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography id="hpl_h1" variant="h1">
        AboutPage
      </Typography>
    </Stack>
  );
};

export default AboutPageLayout;
