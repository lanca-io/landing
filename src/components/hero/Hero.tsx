import { FC } from 'react';
import TrailArrow from '../../assets/icons/TrailArrow';
import classNames from './Hero.module.pcss';
import SwapCard from './SwapCard';

const Hero: FC = (): JSX.Element => {
    return (
        <div className={classNames['hero']}>
            <div className={classNames['hero__title']}>
                <p className="heading-large">Fast and decentralized cross chain transactions</p>
            </div>
            <div className={classNames['hero__content']}>
                <SwapCard />
            </div>
            <div className={classNames['hero__info']}>
                <p className="text-small">About Lanca</p>
                <TrailArrow />
            </div>
        </div>
    );
};

export default Hero;