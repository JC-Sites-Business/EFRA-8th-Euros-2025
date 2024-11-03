import { Stack, Typography } from "@mui/material";
import { compareAsc } from "date-fns";
import React from "react";
import "./Counter.scss";

type T_Counter = {
  countHeader: string;
  countDownData: {
    startDate: Date;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
};

export const Counter: React.FC<T_Counter> = ({ countDownData, countHeader }) => {
  const { startDate, months, days, hours, minutes, seconds } = countDownData;
  const dateState: number = compareAsc(startDate.setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));

  return (
    <Stack justifyContent={"space-evenly"} alignItems={"center"} className="counter-container">
      <Typography variant="h2" className="counter-header">
        {countHeader}
      </Typography>
      <Typography variant="h3" className="counter-date">
        {startDate.toLocaleDateString()}
      </Typography>
      {dateState < 1 ? (
        <Typography sx={{ fontWeight: 900, fontSize: "2.5rem" }}>
          {dateState === 0 ? "Event Has Started." : "Event Has Passed."}
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: 900, fontSize: "2.5rem" }}>
          {months && `${months}M`} {days && `${days}d`} {hours && `${hours}h`} {minutes && `${minutes}m`}{" "}
          {seconds && `${seconds}s`}
        </Typography>
      )}
    </Stack>
  );
};
