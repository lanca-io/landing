import { FC } from 'react'
import classNames from './Amounts.module.pcss'

const Amounts: FC = () => {
	return (
		<div className={classNames['amounts']}>
			<div className={classNames['amount']}>
				<p>Enter amount</p>
			</div>
		</div>
	)
}

export default Amounts
