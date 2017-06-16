import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row';

function Pieces (row) {
  let circleArr = []
  for (let i = 0; i < row.length; i++) {
    let classVal = 'circle'
    if (row[i] === 'r') {
      classVal = 'red'
    } else if (row[i] === 'y') {
      classVal = 'yellow'
    }
    circleArr.push(<div className={classVal}></div>)
  }
  return circleArr
}

export default Pieces
