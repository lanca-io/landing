import { FC } from 'react'
import classNames from './TokenArea.module.pcss'
import MockTextInput from './MockTextInput'
import TokenSelection from './TokenSelection'
import Amounts from './Amounts/Amounts'

type Direction = 'from' | 'to'

type TokenAreaProps = {
	direction: Direction
}

const TokenArea: FC<TokenAreaProps> = ({ direction }): JSX.Element => {
	const heading = direction === 'from' ? 'You pay' : 'You receive'

	return (
		<div className={classNames['token-area']}>
			<div className={classNames['token-area__header']}>
				<p className="text-xxsmall">{heading}</p>
			</div>
			<div className={classNames['token-area__content']}>
				<MockTextInput />
				<TokenSelection />
			</div>
			<Amounts />
		</div>
	)
}

export default TokenArea
