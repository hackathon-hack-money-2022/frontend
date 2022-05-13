import React, { FormEventHandler, useState } from "react";
import { IMaskInput } from "react-imask";

export const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
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

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
