import { useState, ChangeEvent, FormEvent, useCallback } from 'react'
import { useForm } from '@formspree/react'

const useContactForm = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		companyRole: '',
		email: '',
		message: '',
	})

	const [errors, setErrors] = useState({
		fullName: '',
		companyRole: '',
		email: '',
		message: '',
	})

	const [state, handleSubmit, reset] = useForm('xpwqrgqj')

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
		setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
	}, [])

	const validateForm = useCallback(() => {
		const newErrors = {
			fullName: '',
			companyRole: '',
			email: '',
			message: '',
		}

		if (!formData.fullName) {
			newErrors.fullName = 'Please, enter your Full Name'
		}

		if (!formData.companyRole) {
			newErrors.companyRole = 'Company & Role is required'
		}

		if (!formData.email) {
			newErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid'
		}

		if (!formData.message) {
			newErrors.message = 'Message is required'
		}

		setErrors(newErrors)
		return !Object.values(newErrors).some(error => error)
	}, [formData])

	const onSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()

			if (validateForm()) {
				handleSubmit(e as FormEvent<HTMLFormElement>)
			}
		},
		[validateForm, handleSubmit],
	)

	const resetForm = useCallback(() => {
		setFormData({
			fullName: '',
			companyRole: '',
			email: '',
			message: '',
		})
		setErrors({
			fullName: '',
			companyRole: '',
			email: '',
			message: '',
		})
		reset()
	}, [reset])

	return {
		formData,
		errors,
		state,
		handleChange,
		onSubmit,
		resetForm,
	}
}

export default useContactForm
