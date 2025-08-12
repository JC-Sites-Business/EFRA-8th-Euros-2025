import { Stack } from "@mui/material";
import React from "react";

import "./Sponsors.scss";

type T_Sponsors = {
  position: "left" | "right" | "centre";
};

export const Sponsors: React.FC<T_Sponsors> = ({ position }) => {
  const sponsorsLeft = ["Sponsor_1", "Sponsor_2", "Sponsor_3", "Sponsor_4"];
  const sponsorsRight = ["Sponsor_5", "Sponsor_6", "Sponsor_7", "Sponsor_8", "Sponsor_9"];

  return (    
    position === "centre" ? (
      <Stack alignItems={"center"} className="sponsor-centre">
        {sponsorsLeft.concat(sponsorsRight).map((sponsor, index) => (
            <img
              key={`sponsor-centre-${index}`}
              src={`/images/${sponsor}.png`}
              alt={sponsor}
              className="sponsor-image"
              width={"100%"}
            />
          ))
        }
      </Stack>
    ) : (
      <Stack className="sponsor-side">
        <Stack justifyContent="space-between" alignItems={"center"} className={`sponsor-list`} height={"100%"}>
          {(position === "left" ? sponsorsLeft : sponsorsRight).map((sponsor, index) => (
            <img
              key={`sponsor-sides-${index}`}
              src={`/images/${sponsor}.png`}
              alt={sponsor}
              className="sponsor-image"
              width={"80%"}
            />
          ))}
        </Stack>
      </Stack>
    )
  );
};
