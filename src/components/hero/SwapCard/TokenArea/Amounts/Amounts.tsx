import { FC } from 'react'
import classNames from './Amounts.module.pcss'

const Amounts: FC = () => {
	return (
		<div className={classNames['amounts']}>
			<div className={classNames['amount']}>
				<p>$0</p>
			</div>
		</div>
	)
}

export default Amounts
