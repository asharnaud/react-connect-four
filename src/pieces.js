import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row';

function Pieces (row) {
  let circleArr = []
  for (let i = 0; i < row.length; i++) {
    circleArr.push(<div className="circle"></div>)
  }
  return circleArr
}

export default Pieces
