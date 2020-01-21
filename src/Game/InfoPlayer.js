import React from "react";
export function InfoPlayer(props) {
  let aboutCurrentPlayer;
  let currentPlayer = props.currentPlayer;
  if (!props.theWinner) {
    aboutCurrentPlayer = currentPlayer + " is your turn!";
  } else {
    currentPlayer = currentPlayer === "Yellow" ? "Red" : "Yellow";
    aboutCurrentPlayer = currentPlayer + " won!";
  }
  return (
    <div>
      <h1
        style={{ color: currentPlayer.toLowerCase() }}
        className={"border-color-name-player"}
      >
        {aboutCurrentPlayer}
      </h1>
    </div>
  );
}
