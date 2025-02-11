import { FC } from 'react'
import { externalLinks } from '../../../constants/constants'

import classNames from './SwapCard.module.pcss'
import TokenArea from './TokenArea'
import Direction from './Direction/Direction'
import Divider from '../../common/Divider'
import Button from '../../common/Button'

const SwapCard: FC = (): JSX.Element => {
	return (
		<div className={classNames['swap-card']}>
			<TokenArea
				direction="from"
				token="ETH"
				chain="Optimism"
				tokenLogoURL="/ETH.svg"
				chainLogoURL="/Optimism.svg"
			/>
			<Direction />
			<TokenArea
				direction="to"
				token="USDC"
				chain="Polygon"
				tokenLogoURL="/USDC.svg"
				chainLogoURL="/Polygon.svg"
			/>
			<Divider />
			<div className={classNames['button-container']}>
				<Button text="Connect Wallet" color="tertiary" size="large" link={externalLinks.app} />
			</div>
		</div>
	)
}

export default SwapCard
