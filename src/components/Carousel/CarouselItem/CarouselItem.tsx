import { memo } from 'react';
import classes from './CarouselItem.module.css'

type Props = {
    children?: React.ReactNode,
    width?: string,
};

const CarouselItem: React.FC<Props> = ({ children, width }) => {
    return <li className={classes.carouselSlider} style={{ width: width }}>{children}</li>;
};

export default memo(CarouselItem);
