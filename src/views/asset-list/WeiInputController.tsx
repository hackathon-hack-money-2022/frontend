import { Controller, Control } from "react-hook-form";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { NumberMask } from "../../components/NumberInput";

export function WeiInputController({ control }: { control: Control<any> }) {
  return (
    <Controller
      name={`wei`}
      control={control}
      render={({ field }) => {
        return (
          <OutlinedInput
            inputComponent={NumberMask as any}
            placeholder={"wei to deposit"}
            endAdornment={<InputAdornment position="end">Ξ</InputAdornment>}
            {...field}
          />
        );
      }}
    />
  );
}
