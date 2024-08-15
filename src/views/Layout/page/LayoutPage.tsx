import { Box, Stack } from "@mui/material";
import React from "react";
import { useIntl } from "react-intl";

import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const LayoutPage: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  const intl = useIntl();

  const footerLink = "http://www.justcoder.co.uk";
  const footer: string = intl.formatMessage({
    id: "footer",
    defaultMessage: `justCoder ${new Date().getFullYear()}`,
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100dvh",
        maxHeight: "100dvh",
        minHeight: 0,
      }}
    >
      <NavBar />
      <Stack justifyContent={"center"}>{children}</Stack>
      <Footer footer={footer} link={footerLink} />
    </Box>
  );
};

export default LayoutPage;
