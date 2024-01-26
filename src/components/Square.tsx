import { ReactNode } from 'react';

type SquareProps = {
  black?: boolean;
  children?: ReactNode;
};

export default function Square({ black, children }: SquareProps) {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
      style={{
        backgroundColor: fill,
        display: 'flex',
        color: stroke,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  );
}
