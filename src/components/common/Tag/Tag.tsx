import { FC } from 'react'
import classNames from './Tag.module.pcss'

type TagColors = 'lanca' | 'concero' | 'disabled'
type TagSizes = 'small' | 'large'

type TagProps = {
	text: string
	color: TagColors
	size?: TagSizes
}

const Tag: FC<TagProps> = ({ text, color, size = 'small' }): JSX.Element => {
	return (
		<div className={`${classNames['tag']} ${classNames[color]} ${classNames[size]}`}>
			{text}
		</div>
	)
}

export default Tag
