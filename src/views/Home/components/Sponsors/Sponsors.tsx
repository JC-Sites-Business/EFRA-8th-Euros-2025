import { Stack, Typography } from "@mui/material";
import React from "react";

import "./Sponsors.scss";

type T_Sponsors = {
  position: "left" | "right" | "center";
};

export const Sponsors: React.FC<T_Sponsors> = ({ position }) => {
  const sponsorsLeft = ["Sponsor_1", "Sponsor_2", "Sponsor_3", "Sponsor_4"];
  const sponsorsRight = ["Sponsor_5", "Sponsor_6", "Sponsor_7", "Sponsor_8", "Sponsor_9"];

  return (
    <Stack className="sponsor-container">
      <Stack
        // direction={position === "left" ? "column" : position === "right" ? "column-reverse" : "row"}
        justifyContent="space-between"
        className={`sponsor-list`}
        height={"100%"}
      >
        {(position === "left" ? sponsorsLeft : sponsorsRight).map((sponsor, index) => (
          <img
            key={index}
            src={`/images/${sponsor}.png`}
            alt={sponsor}
            className="sponsor-image"
            width={"220px"}
          />
        ))}
      </Stack>
    </Stack>
  );
};
