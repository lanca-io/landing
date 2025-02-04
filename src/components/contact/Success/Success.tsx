import { FC } from 'react'
import classNames from './Success.module.pcss'
import Button from '../../common/Button'

type SuccessProps = {
	onBack: () => void
}

const Success: FC<SuccessProps> = ({ onBack }) => {
	return (
		<div className={classNames['success']}>
			<p className="heading-xsmall">Message Sent</p>
			<img src="/State.png" alt="Success" />
			<p className="text-medium">We will be in touch with you shortly</p>
			<div className={classNames['success__button']}>
				<Button text="Done" color="secondary" size="large" onClick={onBack} />
			</div>
		</div>
	)
}

export default Success
