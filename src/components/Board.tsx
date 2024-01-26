import Square from './Square';
import Knight from './Knight';
import { canMoveKnight, moveKnight } from './Game';

type BoardProps = {
  knightPosition: number[];
};

function handleSquareClick(toX: number, toY: number) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

function renderSquare(i: number, [knightX, knightY]: number[]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)}>
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({ knightPosition }: BoardProps) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: '700px',
        height: '700px',
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid #000'
      }}
    >
      {squares}
    </div>
  );
}
