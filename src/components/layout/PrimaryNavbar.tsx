"use client";

import { useState } from "react";
import Image from "next/image";
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

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(10, 20, 16, 0.94)",
          backdropFilter: "blur(14px)",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            width: "100%",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link
              href="#home"
              underline="none"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: 1,
                  borderColor: "divider",
                  display: "grid",
                  placeItems: "center",
                  overflow: "hidden",
                }}
              >
                <Image src="/scb_icon.svg" alt="SBC Logo" width={24} height={24} />
              </Box>

              <Typography
                variant="button"
                sx={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: 2,
                }}
              >
                Sarath
              </Typography>
            </Link>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  color="text.secondary"
                  sx={{
                    transition: "color .2s",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            bgcolor: "background.default",
            pt: 2,
          },
        }}
      >
        <Box sx={{ px: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Navigate
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.label}
                component="a"
                href={link.href}
                onClick={handleNavClick}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
