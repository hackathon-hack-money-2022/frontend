import React from "react";
import { OwnAppBar } from "../components/AppBar";

export function useAppBar(element: () => JSX.Element): () => JSX.Element {
  const func = () => (
    <React.Fragment>
      <OwnAppBar />
      {element()}
    </React.Fragment>
  );

  return func;
}
