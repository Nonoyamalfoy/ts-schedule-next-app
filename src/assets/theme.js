import { createMuiTheme } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";

// Pick colors on https://material.io/resources/color/#!/

export const theme = createMuiTheme({
  palette: {
    // background: {
    //   default:"#20295f"
    // },
    // type: "dark",
    primary: {
      light: "#88ffff",
      main: "#20295f",
      dark: "#009faf",
      background: "#20295f",
      contrastText: "white",
    },
    secondary: {
      light: "#ffff81",
      main: "#ffd54f",
      dark: "#c8a415",
      contrastText: "#000",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
});
