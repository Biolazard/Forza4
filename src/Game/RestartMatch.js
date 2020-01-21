import React from "react";
export function RestartMatch(props) {
  return (
    <div className="button-restart" onClick={() => props.restartGame()}>
      Restart
    </div>
  );
}
