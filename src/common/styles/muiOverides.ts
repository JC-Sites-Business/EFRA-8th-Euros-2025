import { createTheme } from "@mui/material/styles";

const themeOverides = createTheme({
  palette: {
    primary: {
      main: "#fc6621",
    },
  },
});

export default createTheme(themeOverides);
