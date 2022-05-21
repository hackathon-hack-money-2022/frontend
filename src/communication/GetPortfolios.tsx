import React from "react";

const tokens: Array<{
  name: string;
}> = [
  {
    name: "Basic portfolio",
  },
];

export function GetPortfolios(props: Props): JSX.Element {
  return <React.Fragment>{props.children(tokens)}</React.Fragment>;
}

interface Props {
  children: (token: PortfolioResponse) => JSX.Element;
}

type PortfolioResponse = Array<{
  name: string;
}>;
