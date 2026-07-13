"use client";

import { Button, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface SocialButtonProps {
  label: string;
  icon: ReactNode;
  href?: string;
  disabled?: boolean;
  tooltip?: string;
  onClick?: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  borderColor: theme.palette.divider,
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  padding: theme.spacing(1.25, 2),
  minWidth: 150,
  justifyContent: "flex-start",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: theme.palette.background.default,
  },
  "&.Mui-disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
}));

export default function SocialButton({ label, icon, href, disabled, tooltip, onClick }: SocialButtonProps) {
  const linkProps = href && !disabled ? { component: "a" as const, href, target: "_blank", rel: "noopener noreferrer" } : {};

  const button = (
    <StyledButton
      variant="outlined"
      startIcon={icon}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...linkProps}
    >
      {label}
    </StyledButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
}
