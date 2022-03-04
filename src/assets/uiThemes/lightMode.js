import { blue, lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#F7F8FC",
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: ['"Inter"'].join(","),
  },
});
