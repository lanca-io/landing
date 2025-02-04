import { FC } from 'react'
import SwapIcon from '../../../../assets/icons/SwapIcon'
import classNames from './Direction.module.pcss'

const Direction: FC = () => {
	return (
		<div className={classNames['separator-wrap']}>
			<div className={classNames['separator']} />
			<div className={classNames['direction-icon']}>
				<SwapIcon />
			</div>
			<div className={classNames['separator']} />
		</div>
	)
}

export default Direction
