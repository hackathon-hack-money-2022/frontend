import {
  Controller,
  Control,
  FieldValues,
} from "react-hook-form";
import {
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { AssetSelection } from "./AssetSelection";
import { PercentageMask } from "../../components/PercentageInput";

export function createAssetListControllerItems({
  asset,
  selectedValues,
  control,
  setSelectedValues,
}: Props): [JSX.Element, JSX.Element] {
  return [
    <Controller
      key={asset.length}
      name={`piece.${asset.length}.value`}
      control={control}
      render={({ field }) => (
        <OutlinedInput
          inputComponent={PercentageMask as any}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          {...field}
        />
      )}
    />,
    <Controller
      key={asset.length}
      name={`piece.${asset.length}.name`}
      control={control}
      render={({ field }) => {
        return (
          <AssetSelection
            key={selectedValues.length}
            nameSelected={selectedValues}
            {...field}
            onChange={(event) => {
              setSelectedValues([...selectedValues, event.target.value]);
              field.onChange(event);
            }}
          />
        );
      }}
    />,
  ];
}

interface Props {
  asset: Array<[JSX.Element, JSX.Element]>;
  selectedValues: string[];
  control: Control<FieldValues, any>;
  setSelectedValues: (items: string[]) => void;
}
