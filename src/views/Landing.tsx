import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { CreatePortfolioBUtton } from "./CreatePortfolioButton";
import { PortfolioCard } from "../components/PortfolioCard";
import { GetPortfolios } from "../communication/GetPortfolios";
import { hasMetamask } from "../utils/hasMetamask";
import { CallSmartContractButton } from "./CallSmartContractButton";

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
        <CreatePortfolioBUtton />
      </Grid>

      <Grid item xs={12} style={{ maxWidth: 345, margin: "auto" }}>
        <CallSmartContractButton />
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
