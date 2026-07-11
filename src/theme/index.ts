import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadows";
import { breakpoints } from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  shadows: shadows as any,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          minHeight: "100vh",
          backgroundColor: palette.background?.default,
          color: palette.text?.primary,
          fontFamily: typography.fontFamily,
          backgroundImage:
            "linear-gradient(rgba(110, 231, 183, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 183, 0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          background: `linear-gradient(rgba(110, 231, 183, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 183, 0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(200,127,74,0) 0%, rgba(28,50,38,0.6) 100%)`
        },
        "*": {
          boxSizing: "border-box",
        },
        "::selection": {
          backgroundColor: "rgba(200, 127, 74, 0.3)",
          color: palette.text?.primary,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
