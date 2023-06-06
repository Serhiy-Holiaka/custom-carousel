import React, {
    Children,
    cloneElement,
    ReactElement,
    useState,
} from 'react';
import clsx from 'clsx';
import ArrowIcon from '../Icons/ArrowIcon';
import classes from './Carousel.module.css';

type Props = {
    children?: React.ReactNode;
};

const Carousel: React.FC<Props> = ({ children }) => {
    const [activeId, setActiveId] = useState<number>(0);

    const onUpdateId = (newId: number) => {
        if (newId < 0) {
            newId = 0;
        }
        if (newId >= Children.count(children)) {
            newId = Children.count(children) - 1;
        }

        setActiveId(newId);
    };


    return (
        <div className={classes.carouselHolder}>
            <div
                className={classes.carousel}
            >
                <ul
                    className={classes.sliders}
                    style={{ transform: `translateX(-${activeId * 100}%)` }}
                >
                    {Children.map(children, (child, index) => {
                        const item = child as ReactElement;
                        return cloneElement(item, { width: '100%' });
                    })}
                </ul>
            </div>

            <div className={classes.prewBtn}>
                <button
                    disabled={activeId === 0}
                    className={classes.arrowBtn}
                    type='button'
                    onClick={() => onUpdateId(activeId - 1)}
                >
                    <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                </button>
            </div>
            <div className={classes.nextBtn}>
                <button
                    disabled={activeId === Children.count(children) - 1}
                    className={classes.arrowBtn}
                    type='button'
                    onClick={() => onUpdateId(activeId + 1)}
                >
                    <ArrowIcon />
                </button>
            </div>
            <div className={classes.dotsWrap}>
                {Children.map(children, (child, index) => {
                    return (
                        <button
                            className={clsx(
                                classes.dot,
                                activeId === index ? classes.activeDot : ''
                            )}
                            type='button'
                            onClick={() => onUpdateId(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
