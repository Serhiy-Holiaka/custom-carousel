import React from 'react';
import ImageCard from '../Cards/ImageCard/ImageCard';
import classes from './Gallery.module.css';

type Props = {
    imagesList?: ImagesList[];
};

type ImagesList = {
    imgSrc: string,
    title: string
}

const Gallery: React.FC<Props> = ({ imagesList }) => {
    return (
        <ul className={classes.gallery}>
            {imagesList?.map(({ imgSrc, title }: ImagesList, i: number) => (
                <li key={i}>
                    <ImageCard imgSrc={imgSrc} title={title} />
                </li>
            ))}
        </ul>
    );
};

export default Gallery;
