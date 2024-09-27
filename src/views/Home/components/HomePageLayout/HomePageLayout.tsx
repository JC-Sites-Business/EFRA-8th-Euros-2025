import { Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import banner from "../../../../common/assets/Euros.jpg";

import "./HomePageLayout.scss";
import { Counter } from "../../../../common/Components/molecules/counter";
import { calculateTimeLeft } from "../../../../common/utils/functions";

const HomePageLayout: React.FC = (): JSX.Element => {
  const warmUpDate = new Date("2025-04-28");
  const eventDate = new Date("2025-09-28");
  const [warmUpTimeLeft, setWarmUpTimeLeft] = useState(calculateTimeLeft(warmUpDate));
  const [eventTimeLeft, setEventTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const warmUpTimer = setInterval(() => {
      setWarmUpTimeLeft(calculateTimeLeft(warmUpDate));
    }, 1000);

    const eventTimer = setInterval(() => {
      setEventTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => {
      clearInterval(warmUpTimer);
      clearInterval(eventTimer);
    }; // Clean up the interval on component unmount
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img className="banner-image" src={banner} alt="euros 2025 banner" />
      </Grid>
      <Grid item xs={6}>
        <Card variant="outlined">
          <Counter countDownData={{ ...warmUpTimeLeft, finishDate: warmUpDate }} />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card variant="outlined">
          <Counter countDownData={{ ...eventTimeLeft, finishDate: eventDate }} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePageLayout;
