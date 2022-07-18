import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function CategoryReviews({ reviews }) {
    const [customerFeedback, setCustomerFeedback] = React.useState(reviews[0].rating)

    let sum = [];
    let sumOfRating = 0;
    let numberOfReviews = 0;

    let cleanlinessRatingTotal = 0;
    let communicationRatingTotal = 0;
    let checkInRatingTotal = 0;
    let accuracyRatingTotal = 0;
    let locationRatingTotal = 0;
    let valueRatingTotal = 0;

    let cleanlinessAvg = 0;
    let communicationAvg = 0;
    let checkInAvg = 0;
    let accuracyAvg = 0;
    let locationAvg = 0;
    let valueAvg = 0;

    if (customerFeedback) {
        reviews.forEach(function (item) {
          item.rating.forEach(function (rating) {
            let values = Object.values(rating)
            sum.push(values)
          })
        })
    
        for (let i = 0; i < reviews.length; i++) {
          cleanlinessRatingTotal += reviews[i].rating[0].cleanliness
          communicationRatingTotal += reviews[i].rating[0].communication
          checkInRatingTotal += reviews[i].rating[0].checkIn
          accuracyRatingTotal += reviews[i].rating[0].accuracy
          locationRatingTotal += reviews[i].rating[0].location
          valueRatingTotal += reviews[i].rating[0].value
        }
    
        // Overall Rating
    
        sumOfRating = sum.flat().reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
    
    
        numberOfReviews = reviews.length;
    
        // Category Rating
    
        cleanlinessAvg = (cleanlinessRatingTotal / reviews.length).toFixed(1)
        communicationAvg = (communicationRatingTotal / reviews.length).toFixed(1)
        checkInAvg = (checkInRatingTotal / reviews.length).toFixed(1)
        accuracyAvg = (accuracyRatingTotal / reviews.length).toFixed(1)
        locationAvg = (locationRatingTotal / reviews.length).toFixed(1)
        valueAvg = (valueRatingTotal / reviews.length).toFixed(1)
      }

    const cleanlinessPercentage = {
        width: ''+ cleanlinessAvg * 20 +'%' 
    }

    const communicationPercentage = {
        width: ''+ communicationAvg * 20 +'%'
    }

    const checkInPercentage = {
        width: ''+ checkInAvg * 20 +'%'
    }

    const accuracyPercentage = {
        width: ''+ accuracyAvg * 20 +'%'
    }

    const locationPercentage = {
        width: ''+ locationAvg * 20 +'%'
    }

    const valuePercentage = {
        width: ''+ valueAvg * 20 +'%'
    }


  return (
    <>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Cleanliness</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={cleanlinessPercentage}></div>
              </div>
            </div>
            <div>
              <p>{cleanlinessAvg}</p>
            </div>
          </div>
        </div>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Communication</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={communicationPercentage}></div>
              </div>
            </div>
            <div>
              <p>{communicationAvg}</p>
            </div>
          </div>
        </div>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Check-In</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={checkInPercentage}></div>
              </div>
            </div>
            <div>
              <p>{checkInAvg}</p>
            </div>
          </div>
        </div>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Accuracy</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={accuracyPercentage}></div>
              </div>
            </div>
            <div>
              <p>{accuracyAvg}</p>
            </div>
          </div>
        </div>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Location</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={locationPercentage}></div>
              </div>
            </div>
            <div>
              <p>{locationAvg}</p>
            </div>
          </div>
        </div>
        <div className='review-rating-wrapper' key={uuidv4()}>
          <div className='review-rating-title'>
            <p>Value</p>
          </div>

          <div className='review-rating-bar-container'>
            <div className='review-rating-bar-wrapper'>
              <div className='review-rating-border'>
                <div className='review-rating-bar' style={valuePercentage}></div>
              </div>
            </div>
            <div>
              <p>{valueAvg}</p>
            </div>
          </div>
        </div>
    </>
  )
}
