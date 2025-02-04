import { useEffect } from 'react'

const useModalKeydown = (show: boolean, setShow: (show: boolean) => void) => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setShow(false)
		}
	}

	useEffect(() => {
		if (show) {
			document.body.style.overflowY = 'hidden'
			document.addEventListener('keydown', handleKeyDown)
		} else {
			document.body.style.removeProperty('overflow-y')
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [show])
}

export default useModalKeydown
