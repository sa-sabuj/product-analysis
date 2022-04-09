import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [ reviews, setReviews] = useReviews()
    return (
        <div>
            <h2 className='text-5xl text-center mb-5'>This is customer review {reviews.length}</h2>
            {
                reviews.map(review => <Review key={review.id} review={review} ></Review>)
            }
        </div>
    );
};

export default Reviews;