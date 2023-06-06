import React from 'react';

type Props = {
    imgSrc: string;
    title: string;
};

const ImageCard: React.FC<Props> = ({ imgSrc, title }) => {
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={imgSrc} alt='cardImage' />
            </div>
            <div className='cardTitle'>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default ImageCard;
