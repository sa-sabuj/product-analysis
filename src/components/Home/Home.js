import { logDOM } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReviews()
     
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, [])
    return (
        <div>
            <section className='header-area grid grid-cols-2 gap-4" m-20'>
                <div className='text-area'>
                    <h2 className='text-4xl font-bold mb-5'>
                        Lets talk about  <br /> <span className='mt-5 text-5xl text-blue-500'>Delicious Food!!!!</span>
                    </h2>
                    <p>
                        Eating a healthy dite is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love.Reaher , it's about feeling great, having more energy, improving your health, and boosting your mood. Healthy eating doesn't have to be overly complicated. If you feel overwhelmed by all the conflicting nutrition and dite advice out there , you're not aline.
                    </p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5'>See Reviews</button>
                </div>
                <div className='img-area ml-7'>
                    <h2>
                        Lets talk about some delicious food!!!!

                    </h2>

                </div>
            </section>
            <section>
                <div >
                    <h2 className='text-5xl text-center mb-5'>Customer reviews: {reviews.length}</h2>
                    {/* <p>Customer review: {reviews.length}</p> */}
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='content-center ml-5'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded align-middle content-center mb-8'>See More</button>
                </div>
            </section>
        </div>
    );
};

export default Home;