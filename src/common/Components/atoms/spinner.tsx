import { CircularProgress, Stack } from "@mui/material";
import React from "react";

type T_Spinner = {
  height?: string;
};

export const Spinner: React.FC<T_Spinner> = ({ height }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} sx={{ height: height ?? "100%" }}>
      <CircularProgress color="secondary" />
    </Stack>
  );
};
