import { FC, memo } from 'react'
import classNames from './SocialWidget.module.pcss'

export type Social = 'twitter' | 'discord'

type SocialWidgetProps = {
    icon: JSX.Element
    link: string
    social: Social
}

const SocialWidget: FC<SocialWidgetProps> = ({ link, icon, social }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={`${classNames['social__widget']} ${classNames[social]}`}>
            {icon}
        </a>
    )
}

export default memo(SocialWidget)