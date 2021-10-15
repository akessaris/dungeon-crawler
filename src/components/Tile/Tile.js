import { React } from 'react';
import './Tile.scss';

const Tile = ({ color = 'white' }) => {
  const classes = `Tile color-${color}`;
  return <div className={classes}></div>
};

export default Tile;
