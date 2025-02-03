import { FC, memo } from 'react'
import classNames from './Tokens.module.pcss'

const Tokens: FC = (): JSX.Element => (
	<div className={classNames['tokens__illustration']}>
		<img src="/Menu.png" alt="Tokens" className={classNames['tokens__image']} />
	</div>
)

export default memo(Tokens)
