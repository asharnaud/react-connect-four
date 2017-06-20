import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import Pieces from './pieces';
import Row from './row';
import ResetButton from './reset';
import './index.css';


const initialState = {
  classVal: 'circle',
  player1Score: 0,
  player2Score: 0,
  playerTurn: 'r',
  coordinates: null,
  boardCoordinates: [
    [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5]],
    [[1,0], [1,1], [1,2], [1,3], [1,4], [1,5]],
    [[2,0], [2,1], [2,2], [2,3], [2,4], [2,5]],
    [[3,0], [3,1], [3,2], [3,3], [3,4], [3,5]],
    [[4,0], [4,1], [4,2], [4,3], [4,4], [4,5]],
    [[5,0], [5,1], [5,2], [5,3], [5,4], [5,5]],
    [[6,0], [6,1], [6,2], [6,3], [6,4], [6,5]]
  ],
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

function Players () {
  return (
    <div className="player-box-container">
      <div className="player-box">
      <p>Player 1</p>
      <div className='red'><p className='score'>{appState.player1Score}</p></div>
      </div>
      <div className="player-box">
      <p>Player 2</p>
      <div className='yellow'><p className='score'>{appState.player2Score}</p></div>
      </div>
    </div>
  )
}

function Header () {
  return (
    <div>
      <h1 className="header">Connect Four</h1>
    </div>
  )
}

function App (appState) {
  return (
    <div>
    {Header()}
    {Players()}
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
