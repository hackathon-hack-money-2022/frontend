import React from "react";
import Button from "@mui/material/Button";

export function SimpleButton(props: Props): JSX.Element {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

interface Props {
  onClick: () => void;
  children: string;
}
