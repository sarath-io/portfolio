"use client";

import { createContext, useMemo, useState, type ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import baseTheme from "@/theme";

interface ColorModeContextValue {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  toggleColorMode: () => {},
  mode: "dark",
});

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          ...baseTheme.palette,
          mode,
        },
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "dark" ? "light" : "dark")),
      mode,
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
