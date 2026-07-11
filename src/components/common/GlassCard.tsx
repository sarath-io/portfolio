"use client";

import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

const StyledGlassCard = styled(Paper)(({ theme }) => ({
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(16, 32, 25, 0.7)",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({ children }: GlassCardProps) {
  return <StyledGlassCard>{children}</StyledGlassCard>;
}
