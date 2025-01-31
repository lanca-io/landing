import { FC, useMemo } from 'react'
import Button from '../../common/Button'
import NavigationWidget from '../../common/NavigationWidget'
import classNames from './Hamburger.module.pcss'

type HamburgerProps = {
	isOpen: boolean
}

const navItems = [
	{ title: 'SDK', link: '/' },
	{ title: 'Bridging Framework', link: '/' },
	{ title: 'Docs', link: '/' },
]

const Hamburger: FC<HamburgerProps> = ({ isOpen }) => {
	if (!isOpen) return null

	const navigationWidgets = useMemo(() => {
		return navItems.map(item => (
			<NavigationWidget key={item.title} title={item.title} link={item.link} size="small" />
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
						<Button text="Contact Us" onClick={() => {}} color="tertiary" size="large" />
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
