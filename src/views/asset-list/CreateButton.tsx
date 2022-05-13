import React, { FormEventHandler, useState } from "react";
import {
  useForm,
  Controller,
  Control,
  UseFormHandleSubmit,
  UseFormWatch,
  useFieldArray,
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

export function CreateButton({
  watch,
}: {
  watch: UseFormWatch<any>;
}): JSX.Element {
  const [isValid, setValid] = useState(false);
  const [balance, setBalance] = useState(0);
  React.useEffect(() => {
    const subscription = watch(
      (_value: { piece: Array<{ name?: string; value?: string }> }) => {
        if (_value) {
          let number = _value.piece
            .map(({ value }) => (value ? Number(value) : 0))
            .reduce((a, b) => a + b, 0);

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
