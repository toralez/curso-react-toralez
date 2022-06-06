import { createTheme } from "@mui/material";

export const OneRingTheme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e4a101',
    },
    secondary: {
      main: '#38a9fb',
    },
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
});