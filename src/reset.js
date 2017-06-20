import React from 'react';
import ReactDOM from 'react-dom';
import appState from './index';

function resetGame () {
    appState.classVal = 'circle',
    appState.coordinates = null,
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
    <button className="reset-btn" onClick={resetGame}>New Game</button>
)}

export default ResetButton
