"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[4],
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontWeight: 700,
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: theme.shadows[6],
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
  },
}));

export default GradientButton;
