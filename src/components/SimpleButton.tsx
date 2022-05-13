import React from "react";
import Button from "@mui/material/Button";

export function SimpleButton(props: Props): JSX.Element {
  return (
    <Button
      variant={"contained"}
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </Button>
  );
}

interface Props {
  onClick: () => void;
  children: string;
  disabled?: boolean;
  type?: "submit";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}
