import { React } from 'react';
import Tile from '../Tile/Tile';
import './Grid.scss';

// TODO: use floor to calculate enemies
const Grid = ({ gridWidth, gridHeight, floor }) => {
  const exitIndex = Math.ceil(gridWidth/2 - 1);
  const startIndex = Math.ceil(gridWidth*gridHeight - gridWidth/2 - 1);

  // TODO: randomize
  const enemyIndices = [49];
  const enemyIndicesSet = new Set(enemyIndices);

  const getColor = (idx) => {
    if (enemyIndicesSet.has(idx)) return 'red';
    switch(idx) {
      case exitIndex:
        return 'green';
      case startIndex:
        return 'blue';
      default:
        return 'white';
    }
  }
  
  let counter = 0;
  const matrix = new Array(gridWidth).fill(undefined).map(() => {
    return new Array(gridHeight).fill(undefined).map(() => {
      const key = counter++;
      return <Tile key={key} color={getColor(key)} />
    });
  });
  return <div className="Grid">{matrix}</div>
};

export default Grid;
