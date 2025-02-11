import { FC, useMemo } from 'react'
import RightArrow from '../../../assets/icons/RightArrow'
import classNames from './NavigationWidget.module.pcss'

type WidgetSize = 'small' | 'large'

type WidgetProps = {
	title: string
	size?: WidgetSize
	link: string
	disabled?: boolean
}

const NavigationWidget: FC<WidgetProps> = ({ title, size = 'large', link, disabled = false }): JSX.Element => {
	const rightArrow = useMemo(() => <RightArrow />, [])

	return (
		<div className={`${classNames['card']} ${classNames[size]} ${disabled ? classNames['disabled'] : ''}`}>
			{!disabled ? (
				<a href={link} target="_blank" rel="noreferrer" className={classNames['link']}>
					<div className={classNames['title']}>
						<p className="heading-xsmall">{title}</p>
					</div>
					<div className={classNames['action']}>
						<div className={classNames['icon__wrapper']}>{rightArrow}</div>
					</div>
				</a>
			) : (
				<div className={classNames['link']}>
					<div className={classNames['title']}>
						<p className="heading-xsmall">{title}</p>
					</div>
					<div className={classNames['action']}>
						<div className={classNames['icon__wrapper']}>{rightArrow}</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default NavigationWidget
