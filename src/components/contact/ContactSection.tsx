import { Grid, Link, Stack, Typography } from "@mui/material";
import GlassCard from "@/components/common/GlassCard";
import SectionWrapper from "@/sections/SectionWrapper";
import { contactLinks } from "@/constants/portfolio";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" label="U4 · CONTACT" title="Let's connect the next circuit.">
      <Grid container spacing={3}>
        {contactLinks.map((link) => (
          <Grid size={{ xs: 12, md: 4 }} key={link.label}>
            <GlassCard>
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" color="secondary.main">
                  {link.label}
                </Typography>
                {link.href.startsWith("mailto:") || link.href.startsWith("http") ? (
                  <Link href={link.href} underline="hover" color="text.primary" sx={{ fontWeight: 600 }}>
                    {link.value}
                  </Link>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {link.value}
                  </Typography>
                )}
              </Stack>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
