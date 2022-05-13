import React, { FormEventHandler, useState } from "react";
import {
  useForm,
  Controller,
  Control,
  UseFormHandleSubmit,
  UseFormWatch,
} from "react-hook-form";
import {
  Grid,
  InputAdornment,
  OutlinedInput as Input,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { SimpleSelection } from "../../components/SimpleSelection";
import { SimpleButton } from "../../components/SimpleButton";
import { AssetSelection } from "./AssetSelection";
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={/^([1-9]\d?|100)$/}
        inputRef={ref as any}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export function AssetList({ handleSubmit, control, watch, onSubmit }: Props) {
  const [asset, setAssets] = useState<Array<[JSX.Element, JSX.Element]>>([]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ maxWidth: "75%" }}>
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
        <Grid item xs={12}>
          <SimpleButton
            onClick={() => {
              setAssets([
                ...asset,
                [
                  <Controller
                    name={`value${asset.length}`}
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
            Add additional asset
          </SimpleButton>
        </Grid>

        <Grid item xs={12}>
          <CreateButton watch={watch} />
        </Grid>
      </Grid>
    </form>
  );
}

function CreateButton({ watch }: { watch: UseFormWatch<any> }): JSX.Element {
  const [isValid, setValid] = useState(false);
  const [balance, setBalance] = useState(0);
  React.useEffect(() => {
    const subscription = watch(
      (_value: Record<string, string>, { name, value }) => {
        if (_value) {
          let number = 0;
          [...Object.entries(_value)].map((_, index) => {
            if (_value[`value${index}`]) {
              number += parseInt(_value[`value${index}`] as any as string);
            }
          });
          setValid(number === 100);
          setBalance(number);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <React.Fragment>
      <SimpleButton
        disabled={!isValid}
        color={"success"}
        onClick={() => undefined}
        type={"submit"}
      >
        Create
      </SimpleButton>

      <Typography>
        Current {balance}% is divided, but we want to divide 100%{" "}
      </Typography>
    </React.Fragment>
  );
}

interface Props {
  control: Control;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: unknown) => any;
  watch: UseFormWatch<any>;
}
