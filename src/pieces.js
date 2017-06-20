import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row';
import {gameStatus} from 'connect4-lib';


function Pieces (col, state) {
  let circleArr = []
  let classValue = state.classVal
  for (let i = 0; i < col.length; i++) {
    if (col[i] === 'r') {
      classValue = 'red'
    } else if (col[i] === 'y') {
      classValue = 'yellow'
    }
    circleArr.push(<div data-col={col} data-piece={col[i]} className={classValue}></div>)
  }
  return circleArr
}

export default Pieces
