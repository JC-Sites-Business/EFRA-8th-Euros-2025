import { Stack, Typography } from "@mui/material";
import React from "react";

import "./InformationPageLayout.scss";

const InformationPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography id="hpl_h1" variant="h1">
        InformationPage
      </Typography>
    </Stack>
  );
};

export default InformationPageLayout;
