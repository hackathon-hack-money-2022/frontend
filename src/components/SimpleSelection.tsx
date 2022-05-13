import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

export function SimpleSelection(props: Props) {
  React.useEffect(() => {
    if (!props.value && props.onChange) {
      const item = props.items.filter((item) => !item.deactivated);
      props.onChange(
        {
          target: {
            name: item[0].value,
            value: item[0].value,
          },
        } as any,
        undefined
      );
    }
  }, [props.value, props.onChange]);

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
          <MenuItem disabled={item.deactivated} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

interface Props extends BaseForm {
  items: Array<{
    value: string;
    name: string;
    deactivated?: boolean;
  }>;
  label: string;
}

export interface BaseForm {
  name: string;
  onChange: SelectInputProps<string>["onChange"];
  onBlur: () => void;
  ref: React.Ref<unknown>;

  value?: string;
}
