import { Box, Button, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import bannerLarge from "/images/eurosLarge.jpg";
import bannerSmall from "/images/eurosSmall.jpg";

import { calculateTimeLeft } from "../../../../common/utils/functions";
import { Counter } from "../Counter/Counter";
import { Result } from "../Result/Result";
import "./HomePageLayout.scss";
import { Sponsors } from "../Sponsors/Sponsors";

const HomePageLayout: React.FC = (): JSX.Element => {
  const screneenWidth = window.innerWidth;
  // const warmUpDate = new Date("2025-06-13");
  const eventDate = new Date("2025-08-11");
  // const [warmUpTimeLeft, setWarmUpTimeLeft] = useState(calculateTimeLeft(warmUpDate));
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
    // const warmUpTimer = setInterval(() => {
    //   setWarmUpTimeLeft(calculateTimeLeft(warmUpDate));
    // }, 1000);

    const eventTimer = setInterval(() => {
      setEventTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => {
      // clearInterval(warmUpTimer);
      clearInterval(eventTimer);
    }; // Clean up the interval on component unmount
  }, []);

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} className="main-container">
      {screneenWidth > 900 && <Sponsors position="left" />}
      <Box>
        <Stack direction={"row"} justifyContent={"space-evenly"} className="cards-container">
          <img className="banner-image" src={imageSrc} alt="euros 2025 banner" />
          <Card className="homepage-card">          
            <Counter countDownData={{ ...eventTimeLeft, startDate: eventDate }} countHeader="Main-Event" />
          </Card>
          <Card className="homepage-card">
            {/* <Counter countDownData={{ ...warmUpTimeLeft, startDate: warmUpDate }} countHeader="Warm-Up" /> */}
            <Result nitroChamp="Alex Thurston" electricChamp="Mark Green" resultLink="https://www.rc-results.com/Viewer/Main/MeetingSummary?meetingId=16110"/>
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
          <Button variant="contained" target="_blank" href="https://myrcm.ch/myrcm/main?dId[O]=638&pLa=en&dId[E]=89784&tId=E&hId[1]=org#" className="homepage-bottons">
            Live Timing
          </Button>
          {/* TODO - This link needs updating */}
          <Button variant="contained" target="_blank" href="www.google.com" className="homepage-bottons" disabled>
            Results
          </Button>
          {screneenWidth < 900 && <Sponsors position="centre" />}
        </Stack>
      </Box>
      {screneenWidth > 900 && <Sponsors position="right" />}
    </Stack>
  );
};

export default HomePageLayout;
