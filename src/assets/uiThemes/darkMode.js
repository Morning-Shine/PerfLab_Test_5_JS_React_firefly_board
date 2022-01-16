import { createTheme } from "@mui/material/styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ['"Mulish"'].join(","),
    // allVariants: {
    //   color: "#DDE2FF",
    // },
  },
});
