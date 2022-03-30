import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: "lighter",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: "lighter",
    },
  },
  palette: {
    mode: "light",
  },
});

export default theme;
