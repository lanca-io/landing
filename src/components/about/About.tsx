import { FC, memo } from 'react'
import classNames from './About.module.pcss'
import PartnerCard, { type PartnerColor } from './PartnerCard/PartnerCard'
import Chainlink from '../../assets/icons/Chainlink'
import Concero from '../../assets/icons/Concero'

const partners = [
	{ title: 'Chainlink BUILD', logo: <Chainlink />, color: 'chainlink' as PartnerColor },
	{ title: 'Powered by Concero', logo: <Concero />, color: 'concero' as PartnerColor },
]

const About: FC = (): JSX.Element => {
	return (
		<div className={classNames['about']}>
			<div className={classNames['about__partners']}>
				{partners.map((partner, index) => (
					<PartnerCard key={index} title={partner.title} logo={partner.logo} color={partner.color} />
				))}
			</div>
			<div className={classNames['about__content']}>
				<div className={classNames['about__content__title']}>
					<p className="heading-small">
						Swap and transfer any token across blockchains effortlessly with Lanca. Lightning-fast, secure,
						and decentralized cross-chain transactions in under 30 seconds.
					</p>
				</div>
				<div className={classNames['about__content__illustration']}>
					<img src="/About.png" alt="About" />
				</div>
			</div>
		</div>
	)
}

export default memo(About)
