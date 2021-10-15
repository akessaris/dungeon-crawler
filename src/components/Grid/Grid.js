import { React } from 'react';
import Tile from '../Tile/Tile';
import './Grid.scss';

const Grid = ({ gridSize }) => {
  const matrix = new Array(parseInt(gridSize)).fill(undefined).map((_, idx) => <Tile key={idx} color="red" />);
  return <div className="Grid">{matrix}</div>
};

export default Grid;
