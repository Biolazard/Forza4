import React from "react";
import "./App.css";
import { checkCombinations } from "./checkCombinations";
import { Board } from "./Board";
import { InfoPlayer } from "./InfoPlayer";
import { RestartMatch } from "./RestartMatch";

class Forza4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: new Array(this.props.row)
        .fill(null)
        .map(() => new Array(this.props.col).fill(null)),
      isRed: true,
      winner: undefined
    };

    // this.restartGame = this.restartGame.bind(this);
    this.doDropDisc = this.doDropDisc.bind(this);
  }

  doDropDisc(col) {
    if (this.state.winner) {
      return;
    }
    let matrix = this.state.matrix;
    const player = this.state.isRed ? "R" : "Y";
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] === null) {
        const newmatrix = matrix.map((r, ri) =>
          ri !== i ? r : r.map((c, ci) => (ci !== col ? c : player))
        );
        const winner = checkCombinations(newmatrix, col, i, player);
        this.setState({
          matrix: newmatrix,
          isRed: !this.state.isRed,
          winner
        });
        return;
      }
    }
  }

  restartGame = () => {
    this.setState({
      matrix: new Array(this.props.row)
        .fill(null)
        .map(() => new Array(this.props.col).fill(null)),
      isRed: true,
      winner: undefined
    });
  };

  render() {
    return (
      <div className="alignment-UI">
        <div className="board-info-alignment-center">
          <Board handleClick={this.doDropDisc} matrix={this.state.matrix} />
          <InfoPlayer
            players={this.state.isRed ? ["Yellow", "Red"] : ["Red", "Yellow"]}
            theWinner={this.state.winner}
          />
        </div>
        <RestartMatch restartGame={this.restartGame} />
      </div>
    );
  }
}

function App() {
  return <Forza4 row={6} col={7} />;
}

export default App;
