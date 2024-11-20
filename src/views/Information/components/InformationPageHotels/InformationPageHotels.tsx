import { Box, Card, Link, Stack, Typography } from "@mui/material";
import React from "react";

import hotelsData from "../../../../common/assets/data/hotels.json";

import "./InformationPageHotels.scss";

const InformationPageHotels: React.FC = (): JSX.Element => {
  return (
    <Stack className="info-container">
      <Typography variant="h3">Hotels</Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"3rem"}
        flexWrap={"wrap"}
        className="hotelImages"
      >
        {hotelsData?.map((hotel) => (
          <Link href={hotel.link} target="_blank" underline="none" className="hotelImages-anchor">
            <Card className="hotelImages-card">
              <Box className="hotelImages-title">
                <Typography variant="h5">{hotel.title}</Typography>
              </Box>
              <img key={`hotel_img_${hotel._id}`} src={hotel.image} alt={hotel.title} />
            </Card>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default InformationPageHotels;
