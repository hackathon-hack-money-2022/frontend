import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import { Pie } from "./Pie";
import { TEST_TOKENS } from "../communication/TestAssetConfig";

export function PortfolioCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Pie
              pieces={TEST_TOKENS.map((item, index) => {
                return {
                  ...item,
                  title: item.symbol,
                  value: index === 1 ? 70 : 30,
                };
              })}
            />
          </Typography>
        </CardContent>
        {
          /*
            <CardActions>
              <Button size="small">Withdraw</Button>
            </CardActions>          
          */
        }
      </CardActionArea>
    </Card>
  );
}

interface Props {
  name: string;
}
