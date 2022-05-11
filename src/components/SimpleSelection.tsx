import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function SimpleSelection(props: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        value={props.value}
        label={props.label}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={props.ref}
      >
        {props.items.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

interface Props extends BaseForm {
  items: Array<{
    value: string;
    name: string;
  }>;
  label: string;
}

export interface BaseForm {
  name: string;
  onChange: () => void;
  onBlur: () => void;
  ref: React.Ref<unknown>;

  value?: string;
}
