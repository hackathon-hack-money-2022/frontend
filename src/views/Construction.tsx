import { Grid } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { AssetList } from "./asset-list/AssetList";
import { AssetPie } from "./asset-list/AssetPie";

export function Constructions(): JSX.Element {
  const { control, handleSubmit, watch } = useForm({});
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <React.Fragment>
      <Grid container style={{ maxWidth: "800px", margin: "auto" }} padding={5}>
        <Grid item xs={6}>
          <AssetPie watch={watch} />
        </Grid>

        <Grid item xs={6}>
          <AssetList
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            watch={watch}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
