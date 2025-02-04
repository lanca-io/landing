import { FC } from 'react'
import { TrailArrowRightIcon } from '../../../../../assets/icons/TrailArrowRight'
import { externalLinks } from '../../../../../constants/constants'
import Badge from '../../../../common/Badge'
import classNames from './TokenSelection.module.pcss'

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
		<a className={classNames['token-selection__button']} href={externalLinks.app} rel="noreferrer" target="_blank">
			<div className={classNames['token-selection']}>
				<Badge logoURL="/USDC.png" chainURL="/Polygon.png" />
				<SelectedTokenShape />
			</div>
			<TrailArrowRightIcon />
		</a>
	)
}

export default TokenSelection
