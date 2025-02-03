import { FC } from 'react'

import classNames from './SwapCard.module.pcss'
import TokenArea from './TokenArea'
import Direction from './Direction/Direction'
import Divider from '../../common/Divider'
import Button from '../../common/Button'

const SwapCard: FC = (): JSX.Element => {
	return (
		<div className={classNames['swap-card']}>
			<TokenArea direction="from" />
			<Direction />
			<TokenArea direction="to" />
			<Divider />
			<div/>
			<Button text="Connect Wallet" color="tertiary" size="large" />
		</div>
	)
}

export default SwapCard
