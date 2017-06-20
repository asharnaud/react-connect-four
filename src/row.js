import React from 'react';
import ReactDOM from 'react-dom';
import Pieces from './pieces';
import appState from './index';
import {gameStatus} from 'connect4-lib';

console.log(appState)

function switchTurn () {
  if (appState.playerTurn === "r") {
    appState.playerTurn = "y"
  } else {
    appState.playerTurn = "r"
  }
}

function isWinner () {
  let status = gameStatus(appState.board).status
  let coords = gameStatus(appState.board).coordinates
  if (status === 'winner_red' || status === 'winner_yellow') {
  appState.coordinates = coords
  for (let i = 0; i < coords.length; i++) {
    for (let j = 0; j < appState.coordinates.length; j++) {
          if (coords[i] === appState.coordinates[j]) {
            appState.classVal = 'winner'
        }
      }
    }
  }
}

function updateScore () {
  let status = gameStatus(appState.board).status
  if (status === 'winner_red') {
    appState.player1Score += 1
  } else if (status === 'winner_yellow') {
      appState.player2Score += 1
    }
}

function updateBoardPiece (index) {
  let status = gameStatus(appState.board).status
  console.log(status)
  let boardRow = appState.board[index]
  for (let i = boardRow.length - 1; i >= 0; i--) {
    if (status === 'in_progress' && boardRow[i] === null) {
      boardRow[i] = appState.playerTurn
      switchTurn()
      isWinner()
      updateScore()
      return
    }
  }
}

function Row (state) {
  let rowsArr = []
  for (let i = 0; i < state.board.length; i++) {
      rowsArr.push(
      <div className="row-container" data-row={i} onClick={updateBoardPiece.bind(null, i)}>
        {Pieces(state.board[i], state)}
      </div>
      )
    }
    return rowsArr
}


export default Row
