import React from "react";
import { TEST_TOKENS } from "./TestAssetConfig";

export function GetAsset(props: Props): JSX.Element {
  return <React.Fragment>{props.children(TEST_TOKENS)}</React.Fragment>;
}

interface Props {
  children: (token: TokenResponse) => JSX.Element;
}

type TokenResponse = Array<{
  symbol: string;
  color: string;
}>;
