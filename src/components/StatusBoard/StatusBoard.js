import { React } from 'react';
import './StatusBoard.scss';

const StatusBoard = ({ health, floor }) => {
  return (
    <div className="StatusBoard">
      <header className="StatusBoard-Header"><h2>Status</h2></header>
      <h3>Health: {health}</h3>
      <h3>Floor: {floor}</h3>
    </div>
  )
};

export default StatusBoard;
