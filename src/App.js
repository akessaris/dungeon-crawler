import './App.scss';
import Grid from './components/Grid/Grid';
import StatusBoard from './components/StatusBoard/StatusBoard';

function App() {
  // TODO: Use Redux store
  const health = 100;
  const floor = 1;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dungeon Crawler</h1>
      </header>
      <StatusBoard health={health} floor={floor}/>
      <Grid gridWidth="11"/>
    </div>
  );
}

export default App;
