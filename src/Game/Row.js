import React from "react";
import { Cell } from "./Cell";

export function Row(props) {
  const { row, rowIndex } = props;
  return (
    <div className="align-row">
      {row.map((col, columnIndex) => (
        <Cell
          key={`${rowIndex}x${columnIndex}`}
          row={rowIndex}
          column={columnIndex}
          value={col}
          onClick={props.handleClick}
        />
      ))}
    </div>
  );
}
