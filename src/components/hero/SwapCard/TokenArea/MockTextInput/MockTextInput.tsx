import { FC } from 'react'
import { externalLinks } from '../../../../../constants/constants'
import classNames from './MockTextInput.module.pcss'

type MockTextInputProps = {
	value?: string
}

const MockTextInput: FC<MockTextInputProps> = ({ value = '0' }) => {
	return (
		<a className={classNames['mock-input__wrapper']} target="_blank" href={externalLinks.app} rel="noreferrer">
			<p className={classNames['mock-input']}>{value}</p>
		</a>
	)
}

export default MockTextInput
