"use client";

import { FC } from "react";
import { useMatrix } from "./matrix";

import { useMovePlayer } from "./use-move-player";

const tileSize = "75px";
const width = 11;
const height = 10;

export const Grid: FC = () => {
  const midpoint = Math.ceil(width / 2 - 1);
  const exitIndex = midpoint;

  const playerPosition = useMovePlayer(width, height, { x: midpoint, y: 0 });
  const playerIndex =
    height * width - playerPosition.x - playerPosition.y * width - 1;
  const matrix = useMatrix({ width, height, exitIndex, playerIndex });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width}, ${tileSize})`,
      }}
    >
      {matrix}
    </div>
  );
};

export default Grid;
