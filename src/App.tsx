import { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import CarouselItem from './components/Carousel/CarouselItem/CarouselItem';
import CarouselImageCard from './components/Cards/CarouselImageCard/CarouselImageCard';
import Gallery from './components/Gallery/Gallery';
import './App.css';

import ImageOne from './components/Carousel/carouselDemoImage.png';
import ImageTwo from './components/Carousel/GalleryDemoImage.png';

const list = [
    {
        title: 'Some title',
        imgSrc: ImageOne,
    },
    {
        title: 'Some long title',
        imgSrc: ImageTwo,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageOne,
    },
    {
        title: 'Some long title',
        imgSrc: ImageTwo,
    },
    {
        title: 'Some title',
        imgSrc: ImageOne,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageTwo,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageOne,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageTwo,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageOne,
    },
    {
        title: 'Some very very long title',
        imgSrc: ImageTwo,
    },
];

const App = () => {
    const [isCarousel, setIsCarouse] = useState(false);
    return (
        <div className='app'>
            <header className='header'>
                <p>Images viewer</p>
            </header>
            <button
                className='switchBtn'
                type='button'
                onClick={() => setIsCarouse(!isCarousel)}
            >
                Change view to {isCarousel ? 'gallery' : 'carousel'}
            </button>
            <div>
                {isCarousel ? (
                    <Carousel>
                        {list.map((item, i) => (
                            <CarouselItem key={i}>
                                <CarouselImageCard imgSrc={item.imgSrc} />
                            </CarouselItem>
                        ))}
                    </Carousel>
                ) : (
                    <Gallery imagesList={list} />
                )}
            </div>
        </div>
    );
};

export default App;
