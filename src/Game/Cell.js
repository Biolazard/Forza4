import React from "react";
export function Cell(props) {
  const { column, value } = props;
  const classNames = require("classnames");
  const classToAssign = classNames({
    board: value === null,
    red: value === "R",
    yellow: value === "Y"
  });

  return (
    <div
      className="container-move"
      // onMouseOver={() => console.log("On mouser over")}
    >
      <button className={classToAssign} onClick={() => props.onClick(column)}>
        {/* {`${row}x${column}`} */}
      </button>
    </div>
  );
}
