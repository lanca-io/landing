import { FC, useMemo } from 'react'
import type { TextInputSize } from '../common/TextInput/TextInput'
import Modal from '../common/Modal/Modal'
import classNames from './Contact.module.pcss'
import TextInput from '../common/TextInput'
import Button from '../common/Button'
import Warning from '../../assets/icons/Warning'
import Success from './Success'
import useContactForm from './useContactForm'

type ContactProps = {
	isOpen: boolean
	toggleOpen: () => void
}

const InputError = ({ error }: { error: string }) => {
	return (
		<div className={classNames['error']}>
			<Warning />
			<p>{error}</p>
		</div>
	)
}

const Contact: FC<ContactProps> = ({ isOpen, toggleOpen }) => {
	const { formData, errors, state, handleChange, onSubmit, resetForm } = useContactForm()

	const handleBack = () => {
		resetForm()
		toggleOpen()
	}

	type FormDataKey = keyof typeof formData

	const inputFields = useMemo(
		() => [
			{ name: 'fullName', placeholder: 'Full Name', size: 'small' as TextInputSize, error: errors.fullName },
			{ name: 'companyRole', placeholder: 'I am...', size: 'small' as TextInputSize, error: errors.companyRole },
			{
				name: 'email',
				placeholder: 'your@mail.com',
				size: 'small' as TextInputSize,
				error: errors.email,
				type: 'email',
			},
			{ name: 'message', placeholder: 'Hello Lanca!', size: 'large' as TextInputSize, error: errors.message },
		],
		[errors],
	) as { name: FormDataKey; placeholder: string; size: TextInputSize; error?: string; type?: string }[]

	return (
		<Modal isOpen={isOpen} setIsOpen={toggleOpen} title="Contact us" showHeader={!state.succeeded}>
			{state.succeeded ? (
				<Success onBack={handleBack} />
			) : (
				<form className={classNames['contact-form']} onSubmit={onSubmit}>
					{inputFields.map(({ name, placeholder, size, error, type }) => (
						<div key={name} className={classNames['contact-info__elem']}>
							<p className="text-xsmall">{placeholder}</p>
							<TextInput
								name={name}
								value={formData[name]}
								onChange={handleChange}
								placeholder={placeholder}
								size={size}
								type={type}
								error={!!error}
							/>
							{error && <InputError error={error} />}
						</div>
					))}
					<div>
						<Button text="Send Message" type="submit" color="tertiary" size="large" />
					</div>
				</form>
			)}
		</Modal>
	)
}

export default Contact
