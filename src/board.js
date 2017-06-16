import React from 'react';
import ReactDOM from 'react-dom';
import Pieces from './pieces';
import Row from './row';

function Board (state) {
    return (
    <div className="game-container">
      <div className="board">
        {Row(state)}
      </div>
    </div>
    )
  }

export default Board;
