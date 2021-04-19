import React from 'react';
import TrackList from '../TrackList/Tracklist.js';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <div>Add a TrackList component</div>
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
};

export default Playlist;