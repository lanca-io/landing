import { FC, memo, useMemo } from 'react'
import { Social } from '../common/SocialWidget/SocialWidget'
import DiscordIcon from '../../assets/icons/DiscordIcon'
import TwitterIcon from '../../assets/icons/TwitterIcon'
import Button from '../common/Button'
import NavigationWidget from '../common/NavigationWidget'
import SocialWidget from '../common/SocialWidget'
import classNames from './Footer.module.pcss'

const navItems = [
	{ title: 'SDK', link: '/' },
	{ title: 'Bridging Framework', link: '/' },
	{ title: 'Docs', link: '/' },
]

const socialItems: { icon: JSX.Element; link: string; social: Social }[] = [
	{ icon: <TwitterIcon />, link: '/', social: 'twitter' },
	{ icon: <DiscordIcon />, link: '/', social: 'discord' },
]

const description = (
	<p className="heading-xsmall">
		Want an integration or have questions?
		<br /> Reach out to us and let's build together!
	</p>
)

const LogoContainer: FC = memo(() => (
	<div className={classNames['footer__logo-container']}>
		<img src="/Lanca.png" alt="Lanca Logo" />
	</div>
))

const Content: FC = memo(() => {
	const socialWidgets = useMemo(() => {
		return socialItems.map(item => (
			<SocialWidget key={item.social} icon={item.icon} link={item.link} social={item.social} />
		))
	}, [])

	return (
		<div className={classNames['footer__content']}>
			<div className={classNames['footer__content-description']}>
				{description}
				<div className={classNames['footer__content-action']}>
					<Button text="Contact Us" onClick={() => {}} color="secondary" size="large" />
				</div>
			</div>
			<div className={classNames['footer__content-links']}>
				<p className="text-xsmall">Community</p>
				<div className={classNames['footer__content-socials']}>{socialWidgets}</div>
			</div>
		</div>
	)
})

const Documentation: FC = memo(() => {
	const navigationWidgets = useMemo(() => {
		return navItems.map(item => (
			<NavigationWidget key={item.title} title={item.title} link={item.link} size="large" />
		))
	}, [])

	return (
		<div className={classNames['footer__documentation']}>
			<p className="text-xsmall">Documentation</p>
			<div className={classNames['footer__navigation-cards']}>{navigationWidgets}</div>
		</div>
	)
})

const Copyright: FC = memo(() => (
	<div className={classNames['footer__copyright']}>
		<p className="text-medium">© Lanca 2024</p>
		<div className={classNames['footer__policies']}>
			<a href="/privacy">
				<p className="text-medium">Privacy Policy</p>
			</a>
			<a href="/terms">
				<p className="text-medium">Terms of Service</p>
			</a>
		</div>
	</div>
))

const Footer: FC = () => (
	<div className={classNames['footer']}>
		<LogoContainer />
		<Content />
		<Documentation />
		<Copyright />
	</div>
)

export default memo(Footer)
