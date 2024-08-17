import { Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFoundPage: React.FC = (): JSX.Element => {
  return (
    <Stack className="error_stack" direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Typography className="error_text error_h1" variant="h1">
        Error 404
      </Typography>
      <Typography className="error_text error_h2" variant="h2">
        Page not found
      </Typography>
      <Typography className="error_text error_h5" variant="h5">
        {"Visit the "}
        <NavLink className="error-Link" to={"/"}>
          Homepage
        </NavLink>
        {" or return to previous page."}
      </Typography>
    </Stack>
  );
};

export default PageNotFoundPage;
