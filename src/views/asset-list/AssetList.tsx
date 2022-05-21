import React, { useState } from "react";
import {
  Controller,
  Control,
  UseFormHandleSubmit,
  UseFormWatch,
  useFormState,
} from "react-hook-form";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { SimpleButton } from "../../components/SimpleButton";
import { AssetSelection } from "./AssetSelection";
import { CreateButton } from "./CreateButton";
import { TextMaskCustom } from "../../components/PercentageInput";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { ShowSnackbar } from "../../components/ShowSnackkbar";
import { sendMetamaskTransaction } from "../../utils/sendMetamaskTransaction";
import { Abi, AbiStruct, Uint8 } from "tinyeth";

export function AssetList({ handleSubmit, control, watch, onSubmit }: Props) {
  const [asset, setAssets] = useState<Array<[JSX.Element, JSX.Element]>>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={2}
        key={asset.length}
        style={{ maxWidth: "75%" }}
      >
        {asset.map((item, index) => {
          return (
            <React.Fragment>
              <Grid item xs={5}>
                {item[0]}
              </Grid>
              <Grid item xs={5}>
                {item[1]}
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label="Example">
                  <DeleteIcon
                    onClick={() => {
                      const newAsset = [...asset];
                      newAsset.splice(index, 1);
                      setAssets(newAsset);
                    }}
                  />
                </IconButton>
              </Grid>
            </React.Fragment>
          );
        })}
        <Grid item xs={12}>
          <SimpleButton
            onClick={() => {
              setAssets([
                ...asset,
                [
                  <Controller
                    key={asset.length}
                    name={`piece.${asset.length}.value`}
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        inputComponent={TextMaskCustom as any}
                        endAdornment={
                          <InputAdornment position="end">%</InputAdornment>
                        }
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
                            setSelectedValues([
                              ...selectedValues,
                              event.target.value,
                            ]);
                            field.onChange(event);
                          }}
                        />
                      );
                    }}
                  />,
                ],
              ]);
            }}
          >
            Add additional asset
          </SimpleButton>
        </Grid>

        <Grid item xs={12}>
          {showLoading ? (
            <CircularProgress />
          ) : (
            <CreateButton
              watch={watch}
              onCreate={async (values) => {
                setShowLoading(true);

                const getPercentageNumber = (token: string) => {
                  const value = Number(values[token]);
                  return value ? value : 0;
                }

                sendMetamaskTransaction({
                  data: new Abi().simpleFunctionEncoding({
                    functionName: "deposit",
                    arguments: new AbiStruct([
                      new Uint8(getPercentageNumber("SNX")),
                      new Uint8(getPercentageNumber("DAI")),
                    ]),
                  }),
                  value: "2000000",
                }).then(() => {
                  setShowLoading(false);
                  setShowSuccess(true);
                });
              }}
            />
          )}
        </Grid>

        <ShowSnackbar
          isOpen={showSuccess}
          handleClose={() => setShowSuccess(false)}
        />
      </Grid>
    </form>
  );
}

interface Props {
  control: Control;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: unknown) => any;
  watch: UseFormWatch<any>;
}
