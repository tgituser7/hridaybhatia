type LogoMarkProps = {
  className?: string;
  color?: string;
};

// Blocky "S" monogram built on a 3x5 block grid, rendered as an SVG so it
// scales cleanly at any size used across the brand board.
const CELL = 6;
const GAP = 1.6;
const STEP = CELL + GAP;

const FILLED_CELLS: Array<[col: number, row: number]> = [
  [0, 0], [1, 0], [2, 0],
  [0, 1],
  [0, 2], [1, 2], [2, 2],
  [2, 3],
  [0, 4], [1, 4], [2, 4],
];

const WIDTH = 3 * STEP - GAP;
const HEIGHT = 5 * STEP - GAP;

export default function LogoMark({ className, color = "currentColor" }: LogoMarkProps) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {FILLED_CELLS.map(([col, row]) => (
        <rect
          key={`${col}-${row}`}
          x={col * STEP}
          y={row * STEP}
          width={CELL}
          height={CELL}
          rx={1.3}
          fill={color}
        />
      ))}
    </svg>
  );
}
