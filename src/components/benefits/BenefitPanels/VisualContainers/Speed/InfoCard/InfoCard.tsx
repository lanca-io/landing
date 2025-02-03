import { FC } from "react";
import classNames from './InfoCard.module.pcss';

type InfoCardProps = {
    icon: JSX.Element;
    title: string;
    text: string;
};

const InfoCard: FC<InfoCardProps> = ({ icon, title, text }) => (
    <div className={classNames['info-card']}>
        <div className={classNames['info-card__heading']}>
            {icon}
            <p className="text-medium">{title}</p>
        </div>
        <div className={classNames.infoCard__content}>
            <p className="heading-small">{text}</p>
        </div>
    </div>
);

export default InfoCard;