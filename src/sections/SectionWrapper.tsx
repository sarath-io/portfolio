import { Box, Container, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, label, title, children }: SectionWrapperProps) {
  return (
    <Box component="section" id={id} sx={{ scrollMarginTop: 96, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} mb={4}>
          <Typography variant="overline" color="secondary.main" letterSpacing={2} fontWeight={700}>
            {label}
          </Typography>
          <Typography component="h2" variant="h3" color="text.primary">
            {title}
          </Typography>
        </Stack>
        {children}
      </Container>
    </Box>
  );
}
