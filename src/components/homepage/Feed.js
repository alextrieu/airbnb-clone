import React from 'react';
import Card from './Card.js';
import { listings } from '../data/listings.js';


function Feed() {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);


  return (
    <div className='listing-container'>
      {cardElements}
    </div>
    
  );
}

export default Feed;
