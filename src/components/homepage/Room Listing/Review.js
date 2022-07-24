import React, { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ReviewModal from './ReviewModal';
import CategoryReviews from './CategoryReviews';

export default function Review({ reviews }) {
  const [customerFeedback, setCustomerFeedback] = React.useState(reviews[0].rating)

  const [showModal, setShowModal] = React.useState(false)

  function openModal() {
    setShowModal(true)
  }

  let sum = [];
  let sumOfRating = 0;
  let averageRating = 0;
  let numberOfReviews = 0;
  
  if (customerFeedback) {
    reviews.forEach(function (item) {
      item.rating.forEach(function (rating) {
        let values = Object.values(rating)
        sum.push(values)
      })
    })

    sumOfRating = sum.flat().reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    numberOfReviews = reviews.length;
    averageRating = (Math.round((Math.round((sumOfRating / (numberOfReviews * 6)) * 100) / 100) * 10) / 10).toFixed(2)
  }


  const countLetters = useCallback((str) => {
    return str.trim().split(/\s+/).length;
  })

  const testimonialElements = reviews.slice(0, 6).map((review) => {

    let lettersInTestimonial = countLetters(review.comment)

    const displayShowMore = lettersInTestimonial > 30

    return (
      <div className='testimonial-box' key={uuidv4()}>
        <div className='testimonial-box-heading'>
          <div className='customer-profile'>
            <div className='customer-profile-pic'>
              <img src={review.profilePic}></img>
            </div>
            <div className='customer-name-date'>
              <p>{review.id}</p>
              <p>{review.date}</p>
            </div>
          </div>
        </div>

        <div className='testimonial-box-body'>
          <div className='testimonial-comment'>
            <p>{review.comment}</p>
          </div>
          {
            displayShowMore ?
              <div className='testimonial-comment-modal'>
                <p onClick={openModal} className='review-show-more-link'>Show More<i className="fa-solid fa-greater-than"></i></p>
                {showModal ? <ReviewModal setShowModal={setShowModal} reviews={reviews} /> : null}
              </div> :
              null
          }
        </div>
      </div>
    )
  })


  return (
    <div className='review-container'>
      <div className='review-title'>
        <span><i className="fa-solid fa-star"></i>{averageRating}</span>
        <span>&bull;</span>
        <p>{numberOfReviews} reviews</p>
      </div>

      <div className='review-rating-container'> 
        <CategoryReviews reviews={reviews}/>
      </div> {/* review-rating-container */}

      <div className='testimonial-box-container'>
        {testimonialElements}
        <button className='display-modal-reviews' onClick={openModal}>Show all {numberOfReviews} reviews</button>
      </div>
      <hr></hr>
    </div>
  )
}
