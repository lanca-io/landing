import { FC, useMemo } from 'react';
import Button from '../../common/Button';
import Tag from '../../common/Tag';
import classNames from './Description.module.pcss';

type HeadingProps = {
    title: string;
    subtitle: string;
    text: string;
    firstButtonText: string;
    secondButtonText: string;
    firstButtonLink?: string;
    secondButtonLink?: string;
    firstButtonOnClick?: () => void;
    secondButtonOnClick?: () => void;
    isComingSoon?: boolean;
};

const Description: FC<HeadingProps> = ({
    title,
    subtitle,
    text,
    firstButtonText,
    secondButtonText,
    firstButtonLink,
    secondButtonLink,
    firstButtonOnClick,
    secondButtonOnClick,
    isComingSoon = false,
}): JSX.Element => {
    const memoizedTag = useMemo(() => {
        return isComingSoon ? <Tag text="Coming soon" color="disabled" size="large" /> : null;
    }, [isComingSoon]);

    const memoizedFirstButton = useMemo(() => {
        return (
            <Button
                text={firstButtonText}
                isDisabled={isComingSoon}
                color="secondary"
                size="large"
                className={classNames.description__button}
                link={firstButtonLink}
                onClick={firstButtonOnClick}
            />
        );
    }, [firstButtonText, isComingSoon, firstButtonLink, firstButtonOnClick]);

    const memoizedSecondButton = useMemo(() => {
        return (
            <Button
                text={secondButtonText}
                isDisabled={isComingSoon}
                color="primary"
                size="large"
                className={classNames.description__button}
                link={secondButtonLink}
                onClick={secondButtonOnClick}
            />
        );
    }, [secondButtonText, isComingSoon, secondButtonLink, secondButtonOnClick]);

    return (
        <div className={classNames.container}>
            {memoizedTag}
            <div className={classNames.description}>
                <div className={classNames.description__content}>
                    <div>
                        <p className={`heading-small ${classNames.description__title}`}>{title}</p>
                        <p className={`heading-small ${classNames.description__subtitle}`}>{subtitle}</p>
                    </div>
                    <div className={classNames.description__text}>
                        <p className={`text-medium ${classNames.description__text}`}>{text}</p>
                    </div>
                </div>
                <div className={classNames.description__actions}>
                    {memoizedFirstButton}
                    {memoizedSecondButton}
                </div>
            </div>
        </div>
    );
};

export default Description;