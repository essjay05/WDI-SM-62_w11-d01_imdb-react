import React from 'react';


export default ({ movie: {title, rating} }) => {
    return (
    <div>
        <h1>{title}</h1>
        <h2>{rating}</h2>
    </div>
    )
};