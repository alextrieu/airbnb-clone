import React from 'react';
import Card from './Card.js';
import { listings } from '../../data/listings.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';

function Feed({ title }) {
  
  const cardElements = listings.map((listing) => <Card key={listing.id} listing={listing}/>);

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="main-feed-container">
        <Navigation />
        <div className='listing-container'>
          {cardElements}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feed;
