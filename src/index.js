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


const showStateExplorer = document.location.search.indexOf('stateexplorer') !== -1

function StateExplorer (state) {
  const stateJSON = JSON.stringify(state, null, 2)
  return (
    <section className='explorerContainer'>
      <h1>State Explorer</h1>
      <textarea value={stateJSON}></textarea>
    </section>
  )
}

function App (appState) {
  return (
    <div>
    {Board(appState)}
    {ResetButton()}
    {StateExplorer(appState)}
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
