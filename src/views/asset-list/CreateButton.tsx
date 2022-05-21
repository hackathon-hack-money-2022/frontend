import React, { useState } from "react";
import { UseFormWatch } from "react-hook-form";
import { Typography } from "@mui/material";
import { SimpleButton } from "../../components/SimpleButton";

export function CreateButton({
  watch,
  onCreate,
  show,
}: {
  watch: UseFormWatch<any>;
  onCreate: (values: Record<string, string>, wei: string) => void;
  show: boolean;
}): JSX.Element | null {
  const [isValid, setValid] = useState(false);
  const [balance, setBalance] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});

  const [wei, setWei] = useState("");

  React.useEffect(() => {
    const subscription = watch(
      (_value: {
        piece: Array<{ name?: string; value?: string }>;
        wei: string;
      }) => {
        if (_value) {
          const values: Record<string, string> = {};
          let number = _value.piece
            .map(({ name, value }) => {
              if (name && value) {
                values[name] = value;
              }
              return value ? Number(value) : 0;
            })
            .reduce((a, b) => a + b, 0);

          setBalance(number);
          setValues(values);
          setWei(_value.wei);
          setValid(number === 100 && !!_value.wei);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  if (!show) {
    return null;
  }

  return (
    <React.Fragment>
      <SimpleButton
        disabled={!isValid}
        color={"success"}
        onClick={() => onCreate(values, wei)}
        type={"submit"}
      >
        Create
      </SimpleButton>

      {isValid ? null : (
        <Typography>
          Current {balance}% is divided, but we want to divide 100%{" "}
        </Typography>
      )}
    </React.Fragment>
  );
}
