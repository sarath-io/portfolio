import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  title: string;
  children?: ReactNode;
}

export default function SectionTitle({ label, title, children }: SectionTitleProps) {
  return (
    <Stack spacing={1} mb={4}>
      <Typography variant="overline" color="secondary.main" letterSpacing={2} fontWeight={700}>
        {label}
      </Typography>
      <Typography component="h2" variant="h3" color="text.primary">
        {title}
      </Typography>
      {children}
    </Stack>
  );
}
