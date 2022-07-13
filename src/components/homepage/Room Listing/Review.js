import React from 'react'

export default function Review({ reviews }) {
  // create progress bar 
  // calculate overall review rating
  // calculate # of reviews
  reviews.forEach(function(item) {
      let total = 0;
      item.rating.forEach(function(rating) {
          for (const property in rating) {
              total += rating[property]
          }
      })
      console.log(total)
  })
  return (
    <div>
        
    </div>
  )
}
