import { FC } from "react"

import classNames from './BenefitPanel.module.pcss'

type BenefitPanelProps = {
    title: string
    description: string
    children: JSX.Element
}

const BenefitPanel: FC<BenefitPanelProps> = ({ title, description, children }): JSX.Element => {
    return (
        <div className={classNames['benefit-panel']}>
            <div className={classNames['benefit-panel__heading']}>
                <p className="heading-xsmall">{title}</p>
                <div className={classNames['benefit-panel__subtitle']}>
                    <p className="text-medium">{description}</p>
                </div>
            </div>
            {children}
        </div>
    )
}

export default BenefitPanel


