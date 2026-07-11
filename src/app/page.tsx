import { Box, Container } from "@mui/material";
import PrimaryNavbar from "@/components/layout/PrimaryNavbar";
import HeroSection from "@/components/hero/HeroSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import SkillsSection from "@/components/skills/SkillsSection";
import EducationSection from "@/components/education/EducationSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <Box component="main" id="main-content" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <PrimaryNavbar />
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 } }}>
        <HeroSection />
      </Container>
      <ExperienceSection />
      <ProjectShowcase />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
