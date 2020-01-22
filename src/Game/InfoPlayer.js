import React from "react";
import cx from "classnames";

export function InfoPlayer(props) {
  const [current, next] = props.players;
  return (
    <div>
      <h1
        style={{
          color: props.theWinner ? current.toLowerCase() : next.toLowerCase()
        }}
        className={cx("border-color-name-player", {
          [current.toLowerCase()]: props.theWinner && false,
          [next.toLowerCase()]: !props.theWinner && false
        })}
      >
        {props.theWinner ? `${current} won` : `${next} is your turn`}
      </h1>
    </div>
  );
}
