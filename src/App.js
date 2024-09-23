import './App.css';
import Game from './component/Game';
import { useState } from 'react';

function App() {
  const [history, setHistory] = useState(Array(9).fill(null)); // 과거 이동 목록을 표시하기 위함
  const [nextBox, setNextBox] = useState(true);
  const moveBox = history[history.length - 1] || Array(9).fill(null); // moveBox가 null이면 빈 배열로 설정

  function isPlay(copyBox) {
    setHistory([...history, copyBox]);
    setNextBox(!nextBox);
  }

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((box, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    }else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const reset = () => {
    setHistory(Array(9).fill(null)); // 배열 값 null로 초기화
    setNextBox(true); // 초깃값(X)로 설정
  }

  return (
    <div className="game">
      <div className='game-main'>
        <Game nextBox={nextBox} box={moveBox} onPlay={isPlay} onReset={reset} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


export default App;