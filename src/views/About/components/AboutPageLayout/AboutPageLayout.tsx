import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import halifaxCanteen from "../../../../common/assets/images/halifax-canteen.jpg";
import halifaxMarshall from "../../../../common/assets/images/halifax-marshall.jpg";
import halifaxPitlane from "../../../../common/assets/images/halifax-pitlane.jpg";
import halifaxTrack from "../../../../common/assets/images/halifax-track.jpg";

import "./AboutPageLayout.scss";

const AboutPageLayout: React.FC = (): JSX.Element => {
  return (
    <Stack justifyContent={"center"} sx={{ padding: "30px" }}>
      <Typography variant="h3">About</Typography>
      <Typography>
        Yorkshire Radio Control Model Car Racing Club was founded over 40 years ago and since then has become one of the
        uk's premier rc circuits for on road model cars. Prior to the new track being built in 1999 the club was located
        in central Halifax. The track is now located on the outskirts of Halifax in West Vale, Greetland and has far
        better facilities than it ever did before.
      </Typography>
      <Typography>
        In 2005 the club hosted the 1/10th 200mm euro A's and the 1/8th 40+ & 1/10th 235mm euros as well. Having the
        opportunity to host these two meetings helped to mark the track on the map as the internationally renowned
        facility it is.
      </Typography>
      <Typography>
        The track caters for all on road cars (off road vehicles are not allowed) ranging in size from 1/5th scale to
        1/18th scale. Visit
        <a href="www.brca.org" target="_black">
          www.brca.org
        </a>
        for details on classes.
      </Typography>
      <Box className="aboutImages">
        <img src={halifaxTrack} alt="halifax track" />
        <img src={halifaxPitlane} alt="halifax Pits" />
        <img src={halifaxMarshall} alt="halifax Marshall" />
        <img src={halifaxCanteen} alt="halifax canteen" />
      </Box>
      <Typography>
        In 2007 all 280m in length and 5m in width of the track was fully resurfaced. This saw lap times vastly decrease
        over that of the old surface as it offers a lot more grip. The track has a fully automatic timing system
        consisting of a computer running rc-timing software and timing loop. This system also accepts AMB and MRT
        personal transponders. We also have an on-site drivers and spectators rest area that offers a wide range of food
        and refreshments which are available at any race meetings.
      </Typography>
      <Typography>
        As a member of the club you will have access to the track every day throughout the year unless an arranged
        meeting is booked. Engine's are allowed to be run within the track and paddock perimeter after 9am until 8pm on
        a daily basis. ENGINES ARE NOT ALLOWED TO BE STARTED OUTSIDE THESE AREAS. The only time the track is closed to
        members is during BRCA meetings which can be entered as a BRCA member and is run under the BRCA's rules. (See
        the calendar for the list of these meetings to avoid a wasted trip).
      </Typography>
      <Typography>
        All members have the right to vote at our annual AGM (Usually held around November). No member under the age of
        14 years in allowed into the pit lane at any time. No member under the age of 16 years is allowed onto the track
        to marshall or otherwise retreive a car at any time.
      </Typography>
    </Stack>
  );
};

export default AboutPageLayout;
