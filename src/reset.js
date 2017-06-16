import React from 'react';
import ReactDOM from 'react-dom';
import appState from './index';

function resetGame () {
    appState.playerTurn = 'r'
    appState.board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ]
  }

function ResetButton () {
  return (
    <button className="reset-button" onClick={resetGame}>New Game</button>
)}

export default ResetButton
