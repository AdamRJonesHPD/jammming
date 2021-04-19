import './App.css';
import '../SearchBar/SearchBar.js';
import '../SearchResults/SearchResults.js';
import '../Playlist/Playlist.js';

function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <div>Add a SearchBar component</div>
        <div className="App-playlist">
          <div>Add a SearchResults component</div>
          <div>Add a Playlist component</div>
        </div>
      </div>
    </div>
  );
}

export default App;
