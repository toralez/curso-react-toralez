import { createTheme } from "@mui/material";

export const OneRingTheme = createTheme ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(https://www.zelda.com/breath-of-the-wild/assets/img/patterns/black.jpg)',
          minHeight: '100vh',
        },
      },
    },
  },
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
  typography: {
    h1: {
      fontFamily: "'Joan', serif",
    },
    h2: {
      fontFamily: "'Joan', serif",
    },
    h3: {
      fontFamily: "'Joan', serif",
    },
    h4: {
      fontFamily: "'Joan', serif",
    },
    h5: {
      fontFamily: "'Joan', serif",
    },
    h6: {
      fontFamily: "'Joan', serif",
    },
    button: {
      fontFamily: "'Joan', serif",
    },
  },
  button: {
    fontFamily: "'Joan', serif",
  },
});