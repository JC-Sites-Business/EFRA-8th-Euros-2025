import { Link, Stack, Typography } from "@mui/material";
import React from "react";

import "./InformationPageVRC.scss";

const InformationPageVRC: React.FC = (): JSX.Element => {
  return (
    <Stack className="info-container">
      <Typography variant="h3">VRC Pro</Typography>
      <Typography>
        The Halifax circuit features on the virtual simulator online giving you a chance to try the circuit before
        arriving for the Euros.
      </Typography>
      <Link href="https://www.vrcworld.com/about" target="_blank">
        https://www.vrcworld.com
      </Link>
      <img src="/images/vrc.jpg" />
    </Stack>
  );
};

export default InformationPageVRC;
