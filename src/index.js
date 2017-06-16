import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Pieces from './pieces';
import Row from './row';
import ResetButton from './reset';
import './index.css';


const initialState = {
  playerTurn: 'r',
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

function App (appState) {
  return (
    <div>
    {Board(appState)}
    {ResetButton()}
    </div>
  )
}

const rootEl = document.getElementById('root')

function renderNow () {
  ReactDOM.render(App(appState), rootEl)
  window.requestAnimationFrame(renderNow)
}

window.requestAnimationFrame(renderNow)

export default appState
