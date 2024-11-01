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
    <>
      <Stack alignItems={"center"} justifyContent={"end"} sx={{ padding: "25px 25px 0 25px" }}>
        <Box
          sx={{
            minHeight: "94dvh",
            backgroundColor: "white",
            borderRadius: "20px",
            border: "1px solid grey",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}
        >
          <NavBar />
          {children}
        </Box>
      </Stack>
      <Footer footer={footer} link={footerLink} />
    </>
  );
};

export default LayoutPage;
