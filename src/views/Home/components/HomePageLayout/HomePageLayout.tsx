import { Stack, Typography } from "@mui/material";
import React from "react";

import "./HomePageLayout.scss";

const HomePageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography id="hpl_h1" variant="h1">
        Home Page
      </Typography>
    </Stack>
  );
};

export default HomePageLayout;
