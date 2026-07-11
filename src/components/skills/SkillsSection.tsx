import { Grid, Stack, Typography } from "@mui/material";
import GlassCard from "@/components/common/GlassCard";
import SkillChip from "@/components/common/SkillChip";
import SectionWrapper from "@/sections/SectionWrapper";
import { skillGroups } from "@/constants/portfolio";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" label="U2 · SKILLS" title="Component bill of materials">
      <Grid container spacing={3}>
        {skillGroups.map((group) => (
          <Grid size={{ xs: 12, sm: 6 }} key={group.label}>
            <GlassCard>
              <Typography variant="subtitle2" color="secondary.main" gutterBottom>
                {group.label}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {group.items.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </Stack>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
