import React from "react";
import { Cell } from "./Cell";

export function Row(props) {
  const { row } = props;
  return (
    <div className="align-row">
      {props.matrix[0].map((_, columnIndex) => (
        <Cell
          key={`${row}x${columnIndex}`}
          column={columnIndex}
          value={props.matrix[row][columnIndex]}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
}
