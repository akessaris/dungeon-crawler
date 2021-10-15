import { React } from 'react';
import Tile from '../Tile/Tile';
import './Grid.scss';

const Grid = ({ gridWidth }) => {
  const tiles = Math.pow(gridWidth, 2);
  const bossRoomIndex = Math.ceil(gridWidth/2 - 1);
  const startIndex = Math.ceil(tiles - gridWidth/2 - 1);

  const getColor = (idx) => {
    switch(idx) {
      case bossRoomIndex:
        return 'red';
      case startIndex:
        return 'blue';
      default:
        return 'white';
    }
  }
  
  const matrix = new Array(tiles).fill(undefined).map((_, idx) => <Tile key={idx} color={getColor(idx)} />);
  return <div className="Grid">{matrix}</div>
};

export default Grid;
