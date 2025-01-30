import { FC } from 'react'
import classNames from './Button.module.pcss'

type ButtonProps = {
	text?: string
	icon?: JSX.Element
	onClick: () => void
	color: 'primary' | 'secondary' | 'tertiary'
	size?: 'small' | 'medium' | 'large'
	link?: string
}

const Button: FC<ButtonProps> = ({ text, icon, onClick, color, size = 'medium', link }) => {
	const buttonContent = icon ? icon : text

	return link ? (
		<a href={link} className={`${classNames.button} ${classNames[color]} ${classNames[size]}`} onClick={onClick}>
			{buttonContent}
		</a>
	) : (
		<button className={`${classNames.button} ${classNames[color]} ${classNames[size]}`} onClick={onClick}>
			{buttonContent}
		</button>
	)
}

export default Button
