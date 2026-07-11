import { Box, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import SectionWrapper from "@/sections/SectionWrapper";
import AnimatedCard from "@/components/common/AnimatedCard";
import { projects } from "@/constants/portfolio";

export default function ProjectShowcase() {
  return (
    <SectionWrapper id="projects" label="U2 · PROJECTS" title="Major systems I have built">
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.name}>
            <AnimatedCard delay={index * 0.08}>
              <Stack spacing={2}>
                <Typography variant="subtitle2" color="secondary.main" sx={{ letterSpacing: 1.2 }}>
                  {project.name}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Box>
                  <Typography variant="overline" color="text.secondary" letterSpacing={1}>
                    Technologies
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                    {project.technologies.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary" letterSpacing={1}>
                    Key contributions
                  </Typography>
                  <Stack component="ul" spacing={1} mt={1} sx={{ listStyle: "none", pl: 0, m: 0 }}>
                    {project.contributions.map((item) => (
                      <Typography component="li" key={item} variant="body2" color="text.secondary" sx={{ display: "flex", gap: 1 }}>
                        <Box component="span" sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "secondary.main", mt: 0.75 }} />
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noreferrer" underline="hover" sx={{ fontWeight: 600 }}>
                    View GitHub
                  </Link>
                ) : null}
              </Stack>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
