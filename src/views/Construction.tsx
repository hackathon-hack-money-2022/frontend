import { Grid } from "@mui/material";
import React from "react";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import { GetAsset } from "../communication/GetAssets";
import { Pie } from "../components/Pie";
import { AssetList } from "./asset-list/AssetList";
import { AssetPie } from "./asset-list/AssetPie";

export function Constructions(): JSX.Element {
  const { control, handleSubmit, watch } = useForm({});
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={8}>
          <AssetPie watch={watch} />
        </Grid>

        <Grid item xs={4}>
          <AssetList
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
