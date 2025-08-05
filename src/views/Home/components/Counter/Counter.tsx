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
  const dateState: number = !startDate
    ? 600
    : compareAsc(startDate.setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));

  const countdown = `${months != 0 ? `${months}M ` : ""}${days != 0 ? `${days}d `: ""}${hours != 0 ? `${hours}h ` : ""}${minutes != 0 ? `${minutes}m ` : ""}${seconds != 0 ? `${seconds}s` : ""}`;

  return (
    <Stack justifyContent={"space-evenly"} alignItems={"center"} className="counter-container">
      <Typography variant="h2" className="counter-header">
        {countHeader}
      </Typography>
      <Typography variant="h3" className="counter-date">
        {dateState === 600 ? "TBC" : startDate.toLocaleDateString()}
      </Typography>
      {dateState < 1 ? (
        <Typography className="counter-countdown">
          {dateState === 0 ? "Event Has Started." : "Event Has Passed."}
        </Typography>
      ) : (
        <Typography className="counter-countdown">{dateState === 600 ? "Date to be Confirmed" : countdown}</Typography>
      )}
    </Stack>
  );
};
