import { FC, useMemo } from 'react'
import { externalLinks } from '../../../constants/constants'
import Button from '../../common/Button'
import NavigationWidget from '../../common/NavigationWidget'
import classNames from './Hamburger.module.pcss'

type HamburgerProps = {
	isOpen: boolean
	toggleModal: () => void
}

const navItems = [
	{ title: 'SDK', link: externalLinks.sdk, disabled: false },
	{ title: 'Bridging Framework', link: '/', disabled: true },
	{ title: 'Docs', link: externalLinks.documentation, disabled: false },
]

const Hamburger: FC<HamburgerProps> = ({ isOpen, toggleModal }) => {
	if (!isOpen) return null

	const navigationWidgets = useMemo(() => {
		return navItems.map(item => (
			<NavigationWidget
				key={item.title}
				title={item.title}
				link={item.link}
				disabled={item.disabled}
				size="small"
			/>
		))
	}, [])

	return (
		<div className={classNames['hamburger']}>
			<div className={classNames['hamburger__content']}>
				<div className={classNames['hamburger__heading']}>
					<p className="heading-xsmall">
						Want an integration or have questions? Reach out to us and let's build together!
					</p>
					<div>
						<Button text="Contact Us" onClick={toggleModal} color="tertiary" size="large" />
					</div>
				</div>
				<div className={classNames['hamburger__documentation']}>
					<p className="text-xsmall">Documentation</p>
					<div className={classNames['hamburger__cards']}>{navigationWidgets}</div>
				</div>
			</div>
		</div>
	)
}

export default Hamburger
