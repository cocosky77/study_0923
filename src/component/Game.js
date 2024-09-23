import './Game.css';
import GameBox from './GameBox';
import { useState } from 'react';

function Game({nextBox, box, onPlay, onReset}) {

    const copyBox = box ? box.slice() : Array(9).fill(null); // box 배열 복사본
    const winner = calculateWinner(box || []); // 우승자 계산, box가 null일 수 있으므로 빈 배열 처리
    let result;
  let isDraw = true; // 비기는 경우에만 true

  const isClick = (i) => {
    if(box && (box[i] || winner)){ // 상자에 이미 값이 있거나 우승자가 확정되었을 경우 끝내기
      return;
    };

    if(nextBox) {
      copyBox[i] = "X";
    }else{
      copyBox[i] = "O";
    };

    onPlay(copyBox);
  };


  if(winner) {
    result = `Winner is ${winner}`;
    isDraw = ""; // 우승자가 나왔을 경우 무승부 표시X(마지막에 동시에 나오는 경우 방지 차원)
  }else{
    result = "";
  };


  for(let i=0; i<box.length; i++) {
    if(copyBox[i] === null) { // 한 칸이라도 null이 있으면 isDraw false(무승부X) => 상자가 다 채워져야만 무승부
      isDraw = false;
      break;
    }
  };
  
  if(isDraw) {
    isDraw = "It's a DRAW!";
  }else{
    isDraw = "";
  }

  
  return (
    <div className="Game">
      <div className='gameBoard-container'>
        <p>TIC TAC TOE</p>
        <div className='gameBoard'> {/* 게임판 (300x300 크기) */}
          <GameBox value={box[0]} onBoxClick={() => isClick(0)}/> {/* 상자한칸, 값 -> 코드 너무 길어져서 컴포넌트로 뺌 */}
          <GameBox value={box[1]} onBoxClick={() => isClick(1)}/>
          <GameBox value={box[2]} onBoxClick={() => isClick(2)}/>
          <GameBox value={box[3]} onBoxClick={() => isClick(3)}/>
          <GameBox value={box[4]} onBoxClick={() => isClick(4)}/>
          <GameBox value={box[5]} onBoxClick={() => isClick(5)}/>
          <GameBox value={box[6]} onBoxClick={() => isClick(6)}/>
          <GameBox value={box[7]} onBoxClick={() => isClick(7)}/>
          <GameBox value={box[8]} onBoxClick={() => isClick(8)}/>
        </div>
        <div className='gameBoard-result'>
          <div>{result}</div>
          <div>{isDraw}</div>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

const calculateWinner = (box) => {
  const list = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i=0; i<list.length; i++){
    const [a,b,c] = list[i];
    if(box[a] && box[a] === box[b] && box[a] === box[c]) {
      return box[a];
    }
  }
  return null;
}

export default Game;
