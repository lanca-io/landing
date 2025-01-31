import { FC } from 'react'
import classNames from './Button.module.pcss'

type ButtonProps = {
	text?: string
	icon?: JSX.Element
	onClick?: () => void
	color: 'primary' | 'secondary' | 'tertiary'
	size?: 'small' | 'medium' | 'large'
	link?: string
	isDisabled?: boolean
	className?: string
}

const Button: FC<ButtonProps> = ({
	text,
	icon,
	onClick,
	color,
	size = 'medium',
	link,
	className,
	isDisabled = false,
}) => {
	const buttonContent = icon ? icon : text
	const buttonClass = `${classNames['button']} ${classNames[color]} ${classNames[size]} ${className ? className : ''} ${isDisabled ? classNames['button__disabled'] : ''}`

	return link ? (
		<a href={link} className={buttonClass} onClick={isDisabled ? undefined : onClick} aria-disabled={isDisabled}>
			{buttonContent}
		</a>
	) : (
		<button className={buttonClass} onClick={isDisabled ? undefined : onClick} disabled={isDisabled}>
			{buttonContent}
		</button>
	)
}

export default Button
