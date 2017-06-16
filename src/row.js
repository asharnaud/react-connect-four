import React from 'react';
import ReactDOM from 'react-dom';
import Pieces from './pieces';
import appState from './index';

console.log(appState)

function switchTurn () {
  if (appState.playerTurn === "r") {
    appState.playerTurn = "y"
  } else {
    appState.playerTurn = "r"
  }
}

function addGamePiece (index) {
  let boardRow = appState.board[index]
  for (let i = boardRow.length - 1; i >= 0; i--) {
    if (boardRow[i] === null) {
      boardRow[i] = appState.playerTurn
      switchTurn()
      return
    }
  }
}

function Row (state) {
  let rowsArr = []
  for (let i = 0; i < state.board.length; i++) {
      rowsArr.push(
      <div className="row-container" data-row={i} onClick={addGamePiece.bind(null, i)}>
        {Pieces(state.board[i],state)}
      </div>
      )
    }
    return rowsArr
}


export default Row
