import './App.css';
import './data.js';
import pokemons from './data.js';
import  Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      { pokemons.map((pokemon, id) => < Pokemon key={ id } pokemon={ pokemon } />)}
    </div>
  );
}

export default App;
