import { Stack, Typography } from "@mui/material";
import { compareAsc } from "date-fns";
import React from "react";
import "./Counter.scss";

type T_Counter = {
  countDownData: {
    finishDate: Date;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
};

export const Counter: React.FC<T_Counter> = ({ countDownData }) => {
  const { finishDate, months, days, hours, minutes, seconds } = countDownData;
  const dateState: number = compareAsc(finishDate.setHours(0, 0, 0, 0), new Date().setHours(0, 0, 0, 0));

  return (
    <Stack justifyContent={"center"} alignItems={"center"} className="counter-container">
      {dateState < 1 ? (
        <Typography sx={{ fontWeight: 900, fontSize: "2rem" }}>
          {dateState === 0 ? "Event Has Started." : "Event Has Passed."}
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: 900, fontSize: "2rem" }}>
          {months && `${months}M`} {days && `${days}d`} {hours && `${hours}h`} {minutes && `${minutes}m`}{" "}
          {seconds && `${seconds}s`}
        </Typography>
      )}
    </Stack>
  );
};
