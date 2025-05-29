import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import "./ContactPageLayout.scss";

const ContactPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.493661287079!2d-1.85439772301562!3d53.69164914883061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bdd31be9be721%3A0xdb03c80bd67d3f8d!2sHalifax%20Track!5e0!3m2!1sen!2suk!4v1732044021655!5m2!1sen!2suk"
        loading="lazy"
        className="trackMap"
      />

      <Box className="contactDetails">
        <Typography variant="h3">Contact Us</Typography>
        <Typography>Halifax RC Race Track</Typography>
        <Typography>Stainland Road</Typography>
        <Typography>Halifax</Typography>
        <Typography>HX4 8LS</Typography>
        <Typography>
          <a href="mailto:race.halifaxtrack@gmail.com">race.halifaxtrack@gmail.com</a>
        </Typography>
      </Box>
    </Stack>
  );
};

export default ContactPageLayout;
