"use client";

import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(16, 32, 25, 0.92)",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.short,
  }),
}));

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <StyledPaper>{children}</StyledPaper>
    </motion.div>
  );
}
