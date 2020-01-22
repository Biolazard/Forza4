import React from "react";
import { Row } from "./Row";

export function Board(props) {
  return (
    <div className="container-board">
      {props.matrix.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          rowIndex={rowIndex}
          row={row}
          handleClick={props.handleClick}
        />
      ))}
    </div>
  );
}
