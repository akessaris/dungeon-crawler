import './App.scss';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dungeon Crawler</h1>
      </header>
      <Grid gridSize="100"/>
    </div>
  );
}

export default App;
