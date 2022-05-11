import { PieChart } from "react-minimal-pie-chart";

export function Pie(props: Props) {
  console.log(props.pieces);

  return (
    <PieChart
      style={{ maxWidth: "90%" }}
      data={
        props.pieces
        /*[
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
      ]*/
      }
    />
  );
}

interface Props {
  pieces: Piece[];
}

export interface Piece {
  title: string;
  value: number;
  color: string;
}
