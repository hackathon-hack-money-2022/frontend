import { PieChart } from "react-minimal-pie-chart";

export function Pie(props: Props) {
  return <PieChart style={{ maxWidth: "90%" }} data={props.pieces} />;
}

interface Props {
  pieces: Piece[];
}

export interface Piece {
  title: string;
  value: number;
  color: string;
}
