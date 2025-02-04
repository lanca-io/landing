import { FC, ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import useModalKeydown from './useModalKeydown'
import classNames from './Modal.module.pcss'
import CloseIcon from '../../../assets/icons/CloseIcon'

export interface ModalProps {
	title?: ReactNode | string
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	children?: ReactNode
	showHeader?: boolean
}

const Modal: FC<ModalProps> = ({ title = '', isOpen, setIsOpen, children, showHeader = true }) => {
	useModalKeydown(isOpen, setIsOpen)

	const stopPropagation = (event: ReactMouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
	}

	if (!isOpen) return null

	return (
		<div
			className={classNames['overlay']}
			onClick={() => {
				setIsOpen(false)
			}}
		>
			<div className={classNames['container']} onClick={stopPropagation}>
				{showHeader && (
					<div className={classNames['header']}>
						<h4 className="heading-xsmall">{title}</h4>
						<div className={classNames['back-button']} onClick={() => setIsOpen(false)}>
							<CloseIcon />
						</div>
					</div>
				)}
				{children}
			</div>
		</div>
	)
}

export default Modal
