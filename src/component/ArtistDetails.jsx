import React from 'react';

function ArtistDetails({ artist }) {
  return (
    <div style={{ border: '1px solid #E2E2E2', margin: '10px', padding: '10px' }}>
      <h2>{artist.name}</h2>
      <img 
src={artist.photo_url} alt={`${artist.name}`} style={{ width: '200px', height: 'auto'}} />
      <p>Country: {artist.country}</p>
      <p>Years Active: {artist.years_active}</p>
    </div>
  );
}

export default ArtistDetails;
