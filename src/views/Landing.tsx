import React from "react";
import { Grid } from "@mui/material";
import { CreatePortfolioButton } from "./CreatePortfolioButton";
import { PortfolioCard } from "../components/PortfolioCard";
import { GetPortfolios } from "../communication/GetPortfolios";
import { hasMetamask } from "../utils/hasMetamask";

export function Landing(): JSX.Element {
  const hasMetamaskInstalled = hasMetamask();

  return (
    <Grid
      container
      style={{ textAlign: "center" }}
      direction={"column"}
      spacing={5}
      padding={5}
    >
      <Grid item xs={12} style={{ maxWidth: 345, margin: "auto" }}>
        <CreatePortfolioButton />
      </Grid>

      {hasMetamaskInstalled ? (
        <GetPortfolios>
          {(items) => {
            return (
              <React.Fragment>
                {items.map((item) => (
                  <Grid item xs={12} style={{ maxWidth: 345, margin: "auto" }}>
                    <PortfolioCard name={item.name} />
                  </Grid>
                ))}
              </React.Fragment>
            );
          }}
        </GetPortfolios>
      ) : null}
    </Grid>
  );
}
