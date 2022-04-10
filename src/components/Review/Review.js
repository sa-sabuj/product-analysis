import React from 'react';

const Review = (props) => {
    const { name, email, body } = props.review
    return (


        <div>
            <div className='m-5 border-2 p-5 rounded-lg '>
                <h2 className='text-2xl mb-2'>Name: {name}</h2>
                <h2 className='text-xl mb-2'>Email: {email}</h2>
                <h2 className='text-xl mb-2'>Review: {body}</h2>
                <h2 className='text-xl mb-2'>Ratings: ***</h2>
            </div>
        </div>

    );
};

export default Review;