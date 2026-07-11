"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { navLinks } from "@/constants/portfolio";

export default function PrimaryNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "rgba(10, 20, 16, 0.94)", backdropFilter: "blur(14px)", borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 2, px: 0, display: "flex", justifyContent: "space-between" }}>
          <Link href="#home" underline="none" color="inherit" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 34, height: 34, borderRadius: 2, border: 1, borderColor: "divider", display: "grid", placeItems: "center" }}>
              <Typography variant="button" sx={{ fontSize: 14, fontFamily: "var(--font-mono)" }}>
                SC
              </Typography>
            </Box>
            <Typography variant="button" sx={{ fontFamily: "var(--font-mono)", letterSpacing: 2 }}>
              Sarath
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} underline="none" color="text.secondary" sx={{ transition: "color 0.2s", "&:hover": { color: "primary.main" } }}>
                {link.label}
              </Link>
            ))}
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button href="#contact" variant="outlined" size="small" sx={{ borderRadius: 10, textTransform: "uppercase" }}>
              Contact
            </Button>
            <IconButton color="inherit" edge="end" onClick={() => setMobileOpen(true)} sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} PaperProps={{ sx: { bgcolor: "background.paper" } }}>
        <Box sx={{ width: 260, py: 3, px: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="button" sx={{ fontFamily: "var(--font-mono)", letterSpacing: 2 }}>
              Menu
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.label} component="a" href={link.href} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={link.label} primaryTypographyProps={{ variant: "body2", color: "text.primary" }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
