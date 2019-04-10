import React from 'react';
import Star from './Star';

//presentational component
const StarRating = ({starsSelected = 0, totalStars=5, onRate=f=>f}) => 
<div className="star-rating">
    {[...Array(totalStars)].map((n, i) => 
        <Star key={i}
            selected={i<starsSelected}
            onClick={()=>onRate(i+1)}
        />
    )}
    <p>별점 : {starsSelected} / {totalStars}</p>
</div>


export default StarRating;