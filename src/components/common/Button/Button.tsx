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
	type?: 'button' | 'submit' | 'reset'
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
	type = 'button',
}) => {
	const buttonContent = icon ? icon : text
	const buttonClass = `${classNames['button']} ${classNames[color]} ${classNames[size]} ${className ? className : ''} ${isDisabled ? classNames['button__disabled'] : ''}`

	return link ? (
		<a href={link} className={buttonClass} target='_blank' rel='noopener noreferrer' onClick={isDisabled ? undefined : onClick} aria-disabled={isDisabled}>
			{buttonContent}
		</a>
	) : (
		<button className={buttonClass} onClick={isDisabled ? undefined : onClick} disabled={isDisabled} type={type}>
			{buttonContent}
		</button>
	)
}

export default Button
