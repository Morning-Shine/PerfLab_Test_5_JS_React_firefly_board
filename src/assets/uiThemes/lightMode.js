import { createTheme } from "@mui/material/styles";

export const lightMode = createTheme({
  palette: {
    mode: "light",
  },
  // MuiListItemIcon: {
  //   allVariants: {
  //     color: "#red",
  //   },
  // },
  typography: {
    fontFamily: ['"Mulish"'].join(","),
    // allVariants: {
    //   color: "#DDE2FF",
    // },
  },
});

// console.log(lightMode);