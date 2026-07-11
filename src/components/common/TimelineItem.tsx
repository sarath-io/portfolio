"use client";

import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

const TimelineCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(16, 32, 25, 0.88)",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

interface TimelineItemProps {
  title: string;
  subtitle: string;
  detail: string;
  children?: ReactNode;
}

export default function TimelineItem({ title, subtitle, detail, children }: TimelineItemProps) {
  return (
    <TimelineCard>
      <Typography variant="h6" color="text.primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle2" color="secondary.main" gutterBottom>
        {subtitle}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {detail}
      </Typography>
      {children ? <Box mt={2}>{children}</Box> : null}
    </TimelineCard>
  );
}
