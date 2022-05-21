import React, { useState } from "react";
import { UseFormWatch } from "react-hook-form";
import { Typography } from "@mui/material";
import { SimpleButton } from "../../components/SimpleButton";

export function CreateButton({
  watch,
  onCreate,
}: {
  watch: UseFormWatch<any>;
  onCreate: (values: Record<string, string>) => void;
}): JSX.Element {
  const [isValid, setValid] = useState(false);
  const [balance, setBalance] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  React.useEffect(() => {
    const subscription = watch(
      (_value: { piece: Array<{ name?: string; value?: string }> }) => {
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

          setValid(number === 100);
          setBalance(number);
          setValues(values);
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
        onClick={() => onCreate(values)}
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
