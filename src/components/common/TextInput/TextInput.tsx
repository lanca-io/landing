import { FC, ChangeEvent } from 'react'
import classNames from './TextInput.module.pcss'

export type TextInputSize = 'small' | 'large'

type TextInputProps = {
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	type?: string
	placeholder?: string
	size?: TextInputSize
	error?: boolean
}

const TextInput: FC<TextInputProps> = ({
	name,
	value,
	onChange,
	type = 'text',
	placeholder = '',
	size = 'small',
	error = false,
}) => {
	return (
		<div className={classNames['text-input']}>
			{size === 'large' ? (
				<textarea
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`${classNames['input']} ${classNames[size]} ${error ? classNames['input-error'] : ''}`}
				/>
			) : (
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`${classNames['input']} ${classNames[size]} ${error ? classNames['input-error'] : ''}`}
				/>
			)}
		</div>
	)
}

export default TextInput
