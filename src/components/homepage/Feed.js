import React from 'react';
import Card from './Card.js';
import { listings } from '../data/listings.js';
import Navigation from './Navigation.js';

function Feed() {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);


  return (
    <div className="main-feed-container">
      <Navigation />
      <div className='listing-container'>
        {cardElements}
      </div>
    </div>
    
  );
}

export default Feed;
