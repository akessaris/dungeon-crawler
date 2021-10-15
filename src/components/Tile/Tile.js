import { React } from 'react';
import './Tile.scss';

const Tile = ({ color }) => {
  const classes = `Tile color-${color}`;
  return <div className={classes}></div>
};

export default Tile;
