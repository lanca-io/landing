import { FC, memo } from "react";
import classNames from "./PartnerCard.module.pcss";

export type PartnerColor = 'chainlink' | 'concero';

type PartnerCardProps = {
    title: string;
    logo: JSX.Element;
    color: PartnerColor;
};

const PartnerCard: FC<PartnerCardProps> = ({ title, logo, color }) => (
    <div className={classNames['partner-card']}>
        <div className={`${classNames['partner-card__logo']} ${classNames[color]}`}>
            {logo}
        </div>
        <div className={classNames['partner-card__title']}>
            <p className="text-medium">{title}</p>
        </div>
    </div>
);

export default memo(PartnerCard);