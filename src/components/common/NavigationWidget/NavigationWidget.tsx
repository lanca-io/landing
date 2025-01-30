import { FC, useMemo } from 'react'
import RightArrow from '../../../assets/icons/RightArrow'
import classNames from './NavigationWidget.module.pcss'

type WidgetSize = 'small' | 'large'

type WidgetProps = {
	title: string
	size?: WidgetSize
	link: string
}

const NavigationWidget: FC<WidgetProps> = ({ title, size = 'large', link }): JSX.Element => {
	const rightArrow = useMemo(() => <RightArrow />, [])

	return (
		<div className={`${classNames.card} ${classNames[size]}`}>
			<div className={classNames.title}>
				<p className="text-large">{title}</p>
			</div>
			<div className={classNames.action}>
				<a href={link} target="_blank" rel="noreferrer">
					<div className={classNames.icon__wrapper}>{rightArrow}</div>
				</a>
			</div>
		</div>
	)
}

export default NavigationWidget
