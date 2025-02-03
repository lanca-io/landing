import { FC } from 'react'

import classNames from './TokenSelection.module.pcss'
import Badge from '../../../../common/Badge'
import { TrailArrowRightIcon } from '../../../../../assets/icons/TrailArrowRight'

const SelectedTokenShape: FC = (): JSX.Element => {
	return (
		<div className={classNames['selected-token']}>
			<h4>USDC</h4>
			<p>Polygon</p>
		</div>
	)
}

const TokenSelection: FC = (): JSX.Element => {
	return (
		<button className={classNames['token-selection__button']}>
			<div className={classNames['token-selection']}>
				<Badge logoURL="/USDC.png" chainURL="/Polygon.png" />
				<SelectedTokenShape />
			</div>
			<TrailArrowRightIcon />
		</button>
	)
}

export default TokenSelection
