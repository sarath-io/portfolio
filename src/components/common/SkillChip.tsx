"use client";

import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const SkillChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.divider,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  fontWeight: 600,
  margin: theme.spacing(0.25),
  height: 32,
}));

export default SkillChip;
