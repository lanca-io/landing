import { FC, memo } from 'react'
import classNames from './Benefits.module.pcss'
import BenefitCard from './BenefitCard'
import Tag from '../common/Tag'
import BenefitPanels from './BenefitPanels'
import Divider from '../common/Divider'
import useMediaQuery from '../../hooks/useMediaQuery'

const MemoizedBenefitCard = memo(BenefitCard)

const Benefits: FC = (): JSX.Element => {
	const { isTablet, isPhone } = useMediaQuery()
	return (
		<div className={classNames['benefits']}>
			<div className={classNames['benefits__heading']}>
				<p className="heading-small">
					Designed to simplify
					<br /> your cross-chain transactions
				</p>
			</div>
			<BenefitPanels />
			{!isPhone && !isTablet && <Divider />}
			<div className={classNames['benefits__container']}>
				<div className={classNames['benefits__grid']}>
					<MemoizedBenefitCard
						title="Fully Decentralized"
						description="By leveraging Chainlink Functions, our infrastructure achieves full decentralization through trust-minimized off-chain computations and consensus mechanisms"
						imageUrl="/Decentralized.png"
						firstTag={<Tag text="Chainlink Functions" color="lanca" size="small" />}
					/>
					{isPhone || (isTablet && <Divider />)}
					<MemoizedBenefitCard
						title="Gas Abstracted"
						description="Simplify user experience with gas fees managed internally, eliminating the need for users to hold native tokens."
						imageUrl="/Gas.png"
					/>
				</div>
				<Divider />
				<div className={classNames['benefits__grid']}>
					<MemoizedBenefitCard
						title="Secure"
						description="By leveraging Chainlink Functions, our infrastructure achieves full decentralization through trust-minimized off-chain computations and consensus mechanisms"
						imageUrl="/Secure.png"
						firstTag={<Tag text="Concero Messaging" color="concero" size="small" />}
						secondTag={<Tag text="Chainlink CCIP" color="lanca" size="small" />}
					/>
					{isPhone || (isTablet && <Divider />)}
					<MemoizedBenefitCard
						title="New chains integrated in 2 hours"
						description="By leveraging Chainlink Functions, our infrastructure achieves full decentralization through trust-minimized off-chain computations and consensus mechanisms"
						imageUrl="/Decentralized.png"
						comingSoon
					/>
				</div>
				<Divider />
			</div>
		</div>
	)
}

export default Benefits
