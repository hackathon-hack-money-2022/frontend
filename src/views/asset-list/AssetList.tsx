import React, { FormEventHandler, useState } from "react";
import {
  useForm,
  Controller,
  Control,
  UseFormHandleSubmit,
} from "react-hook-form";
import { Grid, OutlinedInput as Input } from "@mui/material";
import { SimpleSelection } from "../../components/SimpleSelection";
import { SimpleButton } from "../../components/SimpleButton";
import { AssetSelection } from "./AssetSelection";

export function AssetList({ handleSubmit, control, onSubmit }: Props) {
  const [asset, setAssets] = useState<Array<[JSX.Element, JSX.Element]>>([]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ maxWidth: "50%" }}>
        {asset.map((item) => {
          return (
            <React.Fragment>
              <Grid item xs={6}>
                {item[0]}
              </Grid>
              <Grid item xs={6}>
                {item[1]}
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>

      <SimpleButton
        onClick={() => {
          setAssets([
            ...asset,
            [
              <Controller
                name={`value${asset.length}`}
                control={control}
                render={({ field }) => <Input type={"number"} {...field} />}
              />,
              <Controller
                name={`asset${asset.length}`}
                control={control}
                render={({ field }) => {
                  console.log(field);
                  return <AssetSelection {...field} />;
                }}
              />,
            ],
          ]);
        }}
      >
        Add
      </SimpleButton>

      <input type="submit" />
    </form>
  );
}

interface Props {
  control: Control;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: unknown) => any;
}
