import React from "react";
import classnames from "classnames";
export function Cell(props) {
  const { row, column, value } = props;
  return (
    <div
      className="container-move"
      // onMouseOver={() => console.log("On mouser over")}
    >
      <button
        className={classnames({
          board: !value,
          red: value === "R",
          yellow: value === "Y"
        })}
        onClick={() => props.onClick(column)}
      >
        {/* {`${row}x${column}`} */}
      </button>
    </div>
  );
}
