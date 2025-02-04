import { FC } from 'react'
import classNames from './Badge.module.pcss'

type BadgeProps = {
	logoURL: string
	chainURL: string
}

const Badge: FC<BadgeProps> = ({ logoURL, chainURL }) => {
	return (
		<div className={classNames['badge']}>
			<img src={logoURL} alt="Logo" className={classNames['badge-token']} />
			<img src={chainURL} alt="Chain" className={classNames['badge-chain']} />
		</div>
	)
}

export default Badge
