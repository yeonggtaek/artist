import React from 'react';
import ArtistDetails from './component/ArtistDetails'; 
import { artists } from './best-selling-music-artists';

function App() {
  return (
    <div className="App">
      <h1>Best-selling Music Artists</h1>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artist={artist} />
      ))}
    </div>
  );
}

export default App;
