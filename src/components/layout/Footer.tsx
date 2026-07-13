import { Box, Container, Link, Stack, Typography, Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" spacing={3}>
          <Typography variant="body2" color="text.secondary">
            © 2026 Sarath Chandra Bokkela. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="https://linkedin.com/in/sarathchandrabokkela" underline="hover" color="text.secondary" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Tooltip title="GitHub portfolio coming soon.">
              <span>
                <Button size="small" disabled sx={{ color: "text.secondary", textTransform: "none" }}>
                  GitHub
                </Button>
              </span>
            </Tooltip>
            <Link href="mailto:sarathchandra.bokkela@gmail.com" underline="hover" color="text.secondary" target="_blank" rel="noopener noreferrer">
              Email
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
