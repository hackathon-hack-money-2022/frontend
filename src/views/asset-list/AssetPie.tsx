import React, { useState } from "react";
import { UseFormWatch } from "react-hook-form";
import { Pie, Piece } from "../../components/Pie";

export function AssetPie(props: Props) {
  const [pieState, setPieState] = useState<Record<string, string>>({});
  const watch = props.watch;
  React.useEffect(() => {
    const subscription = watch(
      (
        _value: {
          piece: Array<{ name: string; value: string }>;
        },
        { name, value }
      ) => {
        if (_value.piece.length) {
          const newPieState: Record<string, string> = {};
          _value.piece.forEach((item) => {
            if (item && item.value) {
              newPieState[item.name] = item.value;
            }
          });

          setPieState({
            ...newPieState,
          });
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [watch, pieState]);

  const pieces: Array<Piece> =
    Object.entries(pieState).length === 0
      ? [
          {
            title: "Unalloacted",
            value: 50,
            color: "red",
          },
        ]
      : Object.entries(pieState).map((item) => ({
          title: item[0],
          value: Number(item[1]),
          color: stringToColour(item[0]),
        }));

  return <Pie key={pieState.length} pieces={pieces} />;
}

interface Props {
  watch: UseFormWatch<any>;
}

// MVP https://stackoverflow.com/a/16348977
var stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
