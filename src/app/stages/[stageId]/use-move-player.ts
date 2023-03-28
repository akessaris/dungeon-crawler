import { useEffect, useState } from "react";
import { Position } from "./position";

const getVelocity = (code: string): Position => {
  switch (code) {
    case "KeyW":
      return { x: 0, y: 1 };
    case "KeyA":
      return { x: 1, y: 0 };
    case "KeyS":
      return { x: 0, y: -1 };
    case "KeyD":
      return { x: -1, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
};

const isGoingOutOfBounds = (
  position: number,
  velocity: number,
  max: number
) => {
  if (!velocity) return true;
  return position + velocity >= max || position + velocity < 0;
};

export const useMovePlayer = (
  width: number,
  height: number,
  start: Position
) => {
  const [playerPosition, setPlayerPosition] = useState<Position>(start);

  useEffect(() => {
    const getCurrentPosition = (
      { code }: KeyboardEvent,
      { x, y }: Position
    ): Position => {
      const velocity = getVelocity(code);

      const newX = x + velocity.x;
      const newY = y + velocity.y;

      return {
        x: isGoingOutOfBounds(x, velocity.x, width) ? x : newX,
        y: isGoingOutOfBounds(y, velocity.y, height) ? y : newY,
      };
    };

    const updatePlayerPosition = (event: KeyboardEvent) => {
      setPlayerPosition((prevPosition) =>
        getCurrentPosition(event, prevPosition)
      );
    };

    window.addEventListener("keydown", updatePlayerPosition);
    return () => window.removeEventListener("keydown", updatePlayerPosition);
  }, []);

  return playerPosition;
};
