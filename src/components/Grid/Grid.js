import { React, useEffect, useRef, useState } from 'react';
import Tile from '../Tile/Tile';
import './Grid.scss';

// TODO: use floor to calculate enemies
const Grid = ({ gridWidth, gridHeight, floor }) => {
  const mid = Math.ceil(gridWidth/2 - 1);
  const exitIndex = mid;

  // Define a ref since event listener will only get initial state
  const playerIdxRef = useRef(gridWidth*gridHeight - mid - 1);
  const playerPosRef = useRef([mid, gridHeight-1]);

  // TODO: randomize
  const enemyIndices = [49];
  const enemyIndicesSet = new Set(enemyIndices);

  const convertPosToIdx = ([x, y], width) => {
    return x + y*width;
  }

  const getColor = (idx) => {
    if (enemyIndicesSet.has(idx)) return 'red';
    switch(idx) {
      case exitIndex:
        return 'green';
      case playerIdxRef.current:
        return 'blue';
      default:
        return 'white';
    }
  };

  const createMatrix = (width, height) => {
    let counter = 0;
    return new Array(width).fill(undefined).map(() => {
      return new Array(height).fill(undefined).map(() => {
        const key = counter++;
        return <Tile key={key} color={getColor(key)} />
      });
    });
  };

  const [matrix, setMatrix] = useState(createMatrix(gridWidth, gridHeight));

  const move = (prev, next) => {
    const [prevX, prevY] = prev;
    const [updateX, updateY] = next;

    const nextX = prevX + updateX;
    const nextY = prevY + updateY;

    playerPosRef.current = [nextX, nextY];
    playerIdxRef.current = convertPosToIdx(playerPosRef.current, gridWidth);

    const newMatrix = createMatrix(gridWidth, gridHeight);
    setMatrix(newMatrix);
  };

  const isGoingOutOfBounds = (current, velocity, width, height) => {
    if (!velocity) return true;

    const [currX, currY] = current;
    const [velocityX, velocityY] = velocity;
    return (
      currX + velocityX >= width ||
      currY + velocityY >= height ||
      currX + velocityX < 0 ||
      currY + velocityY < 0
    );
  }

  const getVelocity = code => {
    switch (code) {
      case 'KeyW':
        return [0, -1];
      case 'KeyA':
        return [-1, 0]
      case 'KeyS':
        return [0, 1]
      case 'KeyD':
        return [1, 0]
      default:
        return;
    }
  }

  const handleKeyDown = ({ code }) => {
    const velocity = getVelocity(code);
    if (!isGoingOutOfBounds(playerPosRef.current, velocity, gridWidth, gridHeight)) {
      move(playerPosRef.current, velocity);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <div className="Grid">{matrix}</div>
};

export default Grid;
