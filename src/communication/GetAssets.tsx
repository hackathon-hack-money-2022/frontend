import React from "react";

export function GetAsset(props: Props): JSX.Element {
  const tokens: Array<{
    symbol: string;
    color: string;
  }> = [
    {
      symbol: "BTC",
      color: "orange",
    },
    {
      symbol: "ETH",
      color: "Blue",
    },
    {
      symbol: "LTC",
      color: "Blue",
    },
    {
      symbol: "DAI",
      color: "Blue",
    },
  ];
  return <React.Fragment>{props.children(tokens)}</React.Fragment>;
}

interface Props {
  children: (token: TokenResponse) => JSX.Element;
}

type TokenResponse = Array<{
  symbol: string;
  color: string;
}>;
