import { Grid, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function AssetListItem(props: Props) {
  return (
    <React.Fragment>
      <Grid item xs={5}>
        {props.inputField}
      </Grid>
      <Grid item xs={5}>
        {props.selectorField}
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={props.onDelete} />
        </IconButton>
      </Grid>
    </React.Fragment>
  );
}

interface Props {
  inputField: JSX.Element;
  selectorField: JSX.Element;
  onDelete: () => void;
}
