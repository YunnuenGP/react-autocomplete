import './App.css';
import { Search } from './components/search';

function App() {
  return (
    <section className="app">
      <article className="autocomplete-container">
        <h1>Walter's Autocomplete Frontend Challenge</h1>
        <Search />
      </article>
    </section>
  );
}

export default App;

