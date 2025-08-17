import { Stack, Typography } from "@mui/material";
import React from "react";
import "./Result.scss";

type T_Result = {
  raceEvent: string;
  nitroChamp: string;
  electricChamp: string;
  resultSite: string;
  resultLink: string;
};

export const Result: React.FC<T_Result> = ({ raceEvent, nitroChamp, electricChamp, resultSite, resultLink }) => {

  return (
    <Stack justifyContent={"space-evenly"} alignItems={"center"} className="result-container">
      <Typography variant="h2" className="result-header">
        {raceEvent}
      </Typography>
      <Typography variant="h6">
        <b>Nitro Champion: </b><span className="result-champ">{nitroChamp}</span>
      </Typography>
      <Typography variant="h6">
        <b>Electric Champion: </b><span className="result-champ">{electricChamp}</span>
      </Typography>
      <Typography variant="body1">
        Result Link: <a href={resultLink} target="_blank" rel="noopener noreferrer">{resultSite}</a>
      </Typography>
    </Stack>
  );
};
