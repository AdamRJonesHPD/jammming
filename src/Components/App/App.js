import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist.js';
// import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {name: 'name 1', artist: 'artist 1', album: 'album 1', id: '1'},
        {name: 'name 2', artist: 'artist 2', album: 'album 2', id: '2'},
        {name: 'name 3', artist: 'artist 3', album: 'album 3', id: '3'}],
        playlistName: 'My Playlist',
        playlistTracks: [
          {name: 'playListName 1', artist: 'playlistArtist 1', album: 'playlistAlbum 1', id: '4'},
          {name: 'playListName 2', artist: 'playlistArtist 2', album: 'playlistAlbum 2', id: '5'},
          {name: 'playListName 3', artist: 'playlistArtist 3', album: 'playlistAlbum 3', id: '6'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return; //do nothing
    } 

    tracks.push(track);
    this.setState({ playListTracks: tracks })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist" >
            <SearchResults searchResults={this.state.searchResults}
                            onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    )
  }
}; 

export default App;
