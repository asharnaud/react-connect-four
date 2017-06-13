import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Pieces from './pieces';
import Row from './row';
import './index.css';


const initialState = {
  playerTurn: "Red",
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ]
}

let appState = initialState


function switchTurn (appState) {
  if (appState.playerTurn === "Red") {
    appState.playerTurn = "Yellow"
  } else {
    appState.playerTurn = "Red"
  }
}

function App (appState) {
  return (
    <div>
    {Board(appState)}
    </div>
  )
}

function renderNow () {
ReactDOM.render(App(appState), document.getElementById('root'));
}
renderNow()
