import React from 'react';
import ReactDOM from 'react-dom';
import Pieces from './pieces';

function addGamePiece (evt, appState) {
  evt.preventDefault()
  let rowPlayed = evt.currentTarget
  let rowChildren = evt.currentTarget.children
  console.log(rowPlayed)
  console.log(rowChildren)
  for (let i = rowChildren.length - 1; i >= 0; i--) {
    console.log(i)
    // if ( === null) {
    //   i.className="Red"
    // }
  }
}

function Row (state) {
  let rowsArr = []
  for (let i = 0; i < state.length; i++) {
      rowsArr.push(
      <div className="row-container" data-row={i} onClick={addGamePiece}>
        {Pieces(state[i])}
      </div>
      )
    }
    return rowsArr
}


export default Row
