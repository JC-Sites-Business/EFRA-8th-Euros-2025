import { Button, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import bannerLarge from "/images/eurosLarge.jpg";
import bannerSmall from "/images/eurosSmall.jpg";

import { calculateTimeLeft } from "../../../../common/utils/functions";
import { Counter } from "../Counter/Counter";
import { Result } from "../Result/Result";
import "./HomePageLayout.scss";
import { Sponsors } from "../Sponsors/Sponsors";

const HomePageLayout: React.FC = (): JSX.Element => {
  const warmupFinished = true;
  const eventFinished = false;
  const screneenWidth = window.innerWidth;
  const warmUpDate = new Date("2025-06-13");
  const eventDate = new Date("2025-08-13");
  const [warmUpTimeLeft, setWarmUpTimeLeft] = useState(calculateTimeLeft(warmUpDate));
  const [eventTimeLeft, setEventTimeLeft] = useState(calculateTimeLeft(eventDate));
  const [imageSrc, setImageSrc] = useState("");

  const updateImageSrc = () => {
    if (window.innerWidth < 900 && window.matchMedia("(orientation: portrait)").matches) {
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
    if (!warmupFinished) {
      const warmUpTimer = setInterval(() => {
        setWarmUpTimeLeft(calculateTimeLeft(warmUpDate));
      }, 1000);
      return () => {
        clearInterval(warmUpTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (!eventFinished) {
      const eventTimer = setInterval(() => {
        setEventTimeLeft(calculateTimeLeft(eventDate));
      }, 1000);
      return () => {
        clearInterval(eventTimer);
      };
    }
  }, []);

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} className="main-container">
      {screneenWidth > 900 && <Sponsors position="left" />}
      <Stack justifyContent={"space-evenly"} className="main-layout">
        <img className="banner-image" src={imageSrc} alt="euros 2025 banner" />
        <Stack direction={"row"} justifyContent={"space-evenly"} className="cards-container">
          <Card className="homepage-card">
            {eventFinished ? (
            <Result
              raceEvent="Championship"
              nitroChamp="Unknown"
              electricChamp="Unknown"
              resultLink="https://www.myrcm.ch/myrcm/main?dId[O]=638&pLa=en&dId[E]=89785&tId=E&hId[1]=org"
            />
            ) : (<Counter countDownData={{ ...eventTimeLeft, startDate: eventDate }} countHeader="Championship" />)}
          </Card>
          <Card className="homepage-card">
            {warmupFinished ? (
            <Result
              raceEvent="Warm-Up"
              nitroChamp="Alex Thurston"
              electricChamp="Mark Green"
              resultLink="https://www.rc-results.com/Viewer/Main/MeetingSummary?meetingId=16110"
            />
            ) : (<Counter countDownData={{ ...warmUpTimeLeft, startDate: warmUpDate }} countHeader="Warm-Up" />)}
          </Card>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"} gap={"15px"} className="bottons-container">
          <Button variant="contained" target="_blank" href="http://halifaxtrack.co.uk/" className="homepage-bottons">
            Track
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://www.efra.ws/events/ec-25-8th-ic-track-halifax-great-britain/"
            className="homepage-bottons"
          >
            EFRA
          </Button>
          <Button
            variant="contained"
            target="_blank"
            href="https://www.myrcm.ch/myrcm/main?dId[O]=638&pLa=en&dId[E]=89785&tId=E&hId[1]=org"
            className="homepage-bottons"
          >
            Live Timing
          </Button>
          <Button variant="contained" target="_blank" href="www.google.com" className="homepage-bottons" disabled>
            Results
          </Button>
          {screneenWidth < 900 && <Sponsors position="centre" />}
        </Stack>
      </Stack>
      {screneenWidth > 900 && <Sponsors position="right" />}
    </Stack>
  );
};

export default HomePageLayout;
