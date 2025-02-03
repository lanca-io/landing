import { FC } from "react"
import classNames from './BenefitCard.module.pcss'  
import Tag from "../../common/Tag"

type BenefitCardProps = {
    title: string
    description: string
    imageUrl: string
    firstTag?: JSX.Element
    secondTag?: JSX.Element
    comingSoon?: boolean
}

const BenefitCard: FC<BenefitCardProps> = ({ title, description, imageUrl, firstTag, secondTag, comingSoon = false }) => {
    return (
        <div className={classNames['benefit-card']}>
            <div className={classNames['benefit-card__imageContainer']}>
                <img src={imageUrl} alt={title} className={classNames['benefit-card__image']} />
            </div>
            <div className={classNames['benefit-card__content']}>
                <div className={classNames['benefit-card__description']}>
                    <div className={classNames['benefit-card__heading']}>
                        <p className="heading-xsmall">{title}</p>
                        {comingSoon && <Tag text="Coming soon" color="disabled"/>}
                    </div>
                    <p className="text-medium">{description}</p>
                </div>
                <div className={classNames['benefit-card__tags']}>
                    {firstTag}
                    {secondTag}
                </div>
            </div>
        </div>
    )
}

export default BenefitCard