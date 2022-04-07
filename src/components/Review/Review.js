import React from 'react';

const Review = (props) => {
    const {name, email, body} = props.review
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Bmail: {body}</h2>
        </div>
    );
};

export default Review;