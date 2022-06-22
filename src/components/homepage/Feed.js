import React from 'react';
import Card from './Card.js';
import { listings } from '../data/listings.js';
import Navigation from './Navigation.js';

function Feed() {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);


  return (
    <>
      <Navigation />
      <div className='listing-container'>
        {cardElements}
      </div>
    </>
    
  );
}

export default Feed;
