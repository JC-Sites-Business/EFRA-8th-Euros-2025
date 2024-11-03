import { Button, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import bannerLarge from "../../../../common/assets/eurosLarge.jpg";
import bannerSmall from "../../../../common/assets/eurosSmall.jpg";

import { calculateTimeLeft } from "../../../../common/utils/functions";
import { Counter } from "../Counter/Counter";
import "./HomePageLayout.scss";

const HomePageLayout: React.FC = (): JSX.Element => {
  const warmUpDate = new Date("2025-04-28");
  const eventDate = new Date("2025-08-11");
  const [warmUpTimeLeft, setWarmUpTimeLeft] = useState(calculateTimeLeft(warmUpDate));
  const [eventTimeLeft, setEventTimeLeft] = useState(calculateTimeLeft(eventDate));
  const [imageSrc, setImageSrc] = useState("");

  const updateImageSrc = () => {
    if (window.innerWidth < 900) {
      setImageSrc(bannerSmall);
    } else {
      setImageSrc(bannerLarge);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => {
      window.removeEventListener("resize", updateImageSrc);
    };
  }, []);

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
    <Stack alignItems={"center"} className="main-container">
      <img className="banner-image" src={imageSrc} alt="euros 2025 banner" />
      <Stack direction={"row"} justifyContent={"space-evenly"} className="cards-container">
        <Card className="homepage-card">
          <Counter countDownData={{ ...warmUpTimeLeft, startDate: warmUpDate }} countHeader="Warm-Up" />
        </Card>
        <Card className="homepage-card">
          <Counter countDownData={{ ...eventTimeLeft, startDate: eventDate }} countHeader="Main-Event" />
        </Card>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-evenly"} className="bottons-container">
        <Button variant="contained" target="_blank" href="http://halifaxtrack.co.uk/" className="homepage-bottons">
          Track
        </Button>
        {/* TODO - This link needs updating */}
        <Button
          variant="contained"
          target="_blank"
          href="https://www.efra.ws/race-calendar/"
          className="homepage-bottons"
        >
          EFRA
        </Button>
        {/* TODO - This link needs updating */}
        <Button variant="contained" target="_blank" href="www.google.com" className="homepage-bottons" disabled>
          Live Timing
        </Button>
        {/* TODO - This link needs updating */}
        <Button variant="contained" target="_blank" href="www.google.com" className="homepage-bottons" disabled>
          Results
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomePageLayout;
