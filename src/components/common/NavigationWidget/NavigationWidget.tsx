import { FC, useMemo } from 'react';
import RightArrow from '../../../assets/icons/RightArrow';
import classNames from './NavigationWidget.module.pcss';

type WidgetSize = 'small' | 'large';

type WidgetProps = {
    title: string;
    size?: WidgetSize;
    link: string;
    disabled?: boolean;
};

const NavigationWidget: FC<WidgetProps> = ({ title, size = 'large', link, disabled = false }): JSX.Element => {
    const rightArrow = useMemo(() => <RightArrow />, []);

    return (
        <div className={`${classNames['card']} ${classNames[size]} ${disabled ? classNames['disabled'] : ''}`}>
            <div className={classNames['title']}>
                <p className="text-large">{title}</p>
            </div>
            <div className={classNames['action']}>
                {!disabled ? (
                    <a href={link} target="_blank" rel="noreferrer">
                        <div className={`${classNames['icon__wrapper']} ${disabled ? classNames['disabled'] : ''}`}>
                            {rightArrow}
                        </div>
                    </a>
                ) : (
                    <div className={`${classNames['icon__wrapper']} ${disabled ? classNames['disabled'] : ''}`}>
                        {rightArrow}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavigationWidget;