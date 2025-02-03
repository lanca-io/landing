import { FC } from 'react'
import classNames from './MockTextInput.module.pcss'

type MockTextInputProps = {
	value?: string
}

const MockTextInput: FC<MockTextInputProps> = ({ value = '0' }) => {
	return (
		<div className={classNames['mock-input__wrapper']}>
			<p className={classNames['mock-input']}>{value}</p>
		</div>
	)
}

export default MockTextInput
