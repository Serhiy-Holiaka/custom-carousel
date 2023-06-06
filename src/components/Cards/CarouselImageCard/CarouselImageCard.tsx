import React from 'react';

type Props = {
    imgSrc: string;
};

const CarouselImageCard: React.FC<Props> = ({ imgSrc }) => {
    return (
        <div className='cardImage'>
            <img src={imgSrc} alt='cardImage' />
        </div>
    );
};

export default CarouselImageCard;
