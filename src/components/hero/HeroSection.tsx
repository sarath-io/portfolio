"use client";

import { useState } from "react";
import { Box, Chip, Container, Divider, Stack, Snackbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import GradientButton from "@/components/common/GradientButton";
import SocialButton from "@/components/common/SocialButton";
import CircuitTrace from "@/components/CircuitTrace";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { heroActions, heroTags } from "@/constants/portfolio";

const iconMap = {
  download: <FaDownload />,
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
};

export default function HeroSection() {
  const [toastOpen, setToastOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleDisabledClick = () => {
    setToastOpen(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = heroActions[0].href;
    link.download = heroActions[0].href.split("/").pop() || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box component="section" id="home" sx={{ position: "relative", overflow: "hidden", bgcolor: "background.default" }}>
        <Box sx={{ position: "absolute", inset: 0, height: "100%", width: "100%", opacity: 0.7, pointerEvents: "none" }}>
          <CircuitTrace />
        </Box>
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(7, 11, 16, 0.4))" }} />

        <Container maxWidth="lg">
          <Stack spacing={4} sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 12 } }}>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "rgba(110, 231, 183, 1)",
                  boxShadow: "0 0 6px 2px rgba(110, 231, 183, 0.7)",
                  animation: prefersReducedMotion ? "none" : "blink 2.4s ease-in-out infinite",
                  "@keyframes blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.35 },
                  },
                }}
              />
              <Typography variant="overline" color="secondary.main" letterSpacing={2} fontWeight={700}>
                System online · 2+ yrs in production
              </Typography>
            </Stack>
            <Typography component="h1" variant="h1" mt={3} sx={{ maxWidth: { md: "60ch" } }}>
              Sarath Chandra
              <br />
              Bokkela
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={3} sx={{ maxWidth: "58ch" }}>
              Full Stack Developer wiring reliable backends to the interfaces people actually use — Java and Spring Boot on one end,
              React and Next.js on the other, with generative AI soldered in between.
            </Typography>
          </Box>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {heroTags.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" color="secondary" sx={{ borderRadius: 2 }} />
            ))}
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <GradientButton onClick={handleDownloadResume} startIcon={iconMap.download}>
              {heroActions[0].label}
            </GradientButton>
            <SocialButton label={heroActions[1].label} icon={iconMap.linkedin} href={heroActions[1].href} />
            <SocialButton
              label={heroActions[2].label}
              icon={iconMap.github}
              disabled
              tooltip="GitHub portfolio coming soon."
              onClick={handleDisabledClick}
            />
          </Stack>

          <Box sx={{ width: "100%", maxWidth: 640 }}>
            <Divider sx={{ borderColor: "divider" }} />
            <Typography variant="body2" color="text.secondary" mt={2}>
              Download the resume or connect via LinkedIn for a production-ready collaboration.
            </Typography>
          </Box>
        </Stack>
        </Container>

        <Snackbar
          open={toastOpen}
          autoHideDuration={3600}
          onClose={() => setToastOpen(false)}
          message="Public projects are currently being prepared. Check back soon!"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </Box>
    </motion.div>
  );
}
