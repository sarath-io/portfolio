import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SectionWrapper from "@/sections/SectionWrapper";
import AnimatedCard from "@/components/common/AnimatedCard";
import { experienceHighlights } from "@/constants/portfolio";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" label="U1 · EXPERIENCE" title="Where the current runs">
      <AnimatedCard>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" color="text.primary" fontWeight={700}>
              Software Engineer · Happiest Minds Technologies
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              Full stack, backend-leaning
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            I contribute to product delivery across architecture, implementation, and delivery support, with a focus on scalable backend services,
            AI-enabled workflows, and polished user experiences.
          </Typography>

          <List disablePadding>
            {experienceHighlights.map((item) => (
              <ListItem disableGutters key={item} sx={{ alignItems: "flex-start", py: 0.75 }}>
                <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                  <CircleIcon sx={{ width: 8, height: 8, color: "secondary.main" }} />
                </ListItemIcon>
                <ListItemText primary={item} primaryTypographyProps={{ variant: "body2", color: "text.secondary" }} />
              </ListItem>
            ))}
          </List>
        </Stack>
      </AnimatedCard>
    </SectionWrapper>
  );
}
