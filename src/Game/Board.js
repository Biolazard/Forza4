import React from "react";
import { Row } from "./Row";

export function Board(props) {
  return (
    <div className="container-board">
      {props.matrix.map((_, rowIndex) => (
        <Row key={rowIndex} row={rowIndex} {...props} />
      ))}
    </div>
  );
}
