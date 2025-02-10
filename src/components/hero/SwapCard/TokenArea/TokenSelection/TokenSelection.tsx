import { FC } from 'react'
import { TrailArrowRightIcon } from '../../../../../assets/icons/TrailArrowRight'
import { externalLinks } from '../../../../../constants/constants'
import Badge from '../../../../common/Badge'
import classNames from './TokenSelection.module.pcss'

type TokenSelectionProps = {
	token: string
	chain: string
	tokenLogoURL: string
	chainLogoURL: string
}

type SelectedTokenShapeProps = {
	token: string
	chain: string
}

const SelectedTokenShape: FC<SelectedTokenShapeProps> = ({ token, chain }): JSX.Element => {
	return (
		<div className={classNames['selected-token']}>
			<h4>{token}</h4>
			<p>{chain}</p>
		</div>
	)
}

const TokenSelection: FC<TokenSelectionProps> = ({ token, chain, tokenLogoURL, chainLogoURL}): JSX.Element => {
	return (
		<a className={classNames['token-selection__button']} href={externalLinks.app} rel="noreferrer" target="_blank">
			<div className={classNames['token-selection']}>
				<Badge logoURL={tokenLogoURL} chainURL={chainLogoURL} />
				<SelectedTokenShape token={token} chain={chain} />
			</div>
			<TrailArrowRightIcon />
		</a>
	)
}

export default TokenSelection
