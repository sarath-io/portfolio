import { Grid, Stack, Typography } from "@mui/material";
import GlassCard from "@/components/common/GlassCard";
import SectionWrapper from "@/sections/SectionWrapper";
import { educationItems } from "@/constants/portfolio";

export default function EducationSection() {
  return (
    <SectionWrapper id="education" label="U3 · EDUCATION & AWARDS" title="Calibration record">
      <Grid container spacing={3}>
        {educationItems.map((item) => (
          <Grid size={{ xs: 12, md: 6 }} key={item.title}>
            <GlassCard>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="secondary.main">
                  {item.badge}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.institution} · {item.dateRange}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.detail}
                </Typography>
              </Stack>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
