import React from 'react'

export default function Review({ reviews }) {
  // create progress bar 


  const [customerFeedback, setCustomerFeedback] = React.useState(reviews[0].rating)

  let sum = []; 
  let sumOfRating = 0;
  let averageRating = 0;
  let numberOfReviews = 0;

  if (customerFeedback) {
    reviews.forEach(function(item) {
      item.rating.forEach(function(rating) {
        let values = Object.values(rating)
        sum.push(values)
      })
    })

    sumOfRating = sum.flat().reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  
    averageRating = (Math.round((Math.round((sumOfRating/36) * 100) / 100) * 10) / 10).toFixed(2)
  
    numberOfReviews = reviews.length;
  }
  
  return (
    <div className='review-container'>
      <div className='review-title'>
        <span><i className="fa-solid fa-star"></i>{averageRating}</span>
        &bull;
        <p>{numberOfReviews} reviews</p>
      </div>

      <div className='review-rating-container'> {/* Grid container */}
        <div className='review-rating-cleanliness'> {/* Contains both text + container */}
          <div className='review-rating-cleanliness-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'> {/* Contains both rating bar + rating value */}
            <div className='review-rating-border'>
              <div className='review-rating-bar'></div>
            </div>
            <div> {/* Rating Value*/}
              <p>4.2</p>
            </div>
          </div> {/* end of review-rating-bar-container */}

        </div> {/* end of review-rating-cleanliness */}
      </div> {/* review-rating-container */}
    </div>
  )
}
