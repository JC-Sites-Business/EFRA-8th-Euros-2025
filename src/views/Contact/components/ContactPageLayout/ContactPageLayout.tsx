import { Stack, Typography } from "@mui/material";
import React from "react";

import "./ContactPageLayout.scss";

const ContactPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography id="hpl_h1" variant="h1">
        ContactPage
      </Typography>
    </Stack>
  );
};

export default ContactPageLayout;
