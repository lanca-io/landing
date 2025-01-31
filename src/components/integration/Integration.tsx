import { FC, memo } from 'react'
import classNames from './Integration.module.pcss'
import Description from './Description'
import BridgingVisual from './Visuals/Bridging'
import SDKVisual from './Visuals/SDK'

const SDKIntegration: FC = () => (
	<div className={classNames.integration}>
		<Description
			title="Lanca SDK"
			subtitle="Cross chain liquidity in one click"
			text="Integrate seamless cross-chain functionalities into your application with ease, reducing development time and complexity"
			firstButtonText="Integrate"
			secondButtonText="Documentation"
		/>
		<SDKVisual />
	</div>
)

const BridgingIntegration: FC = () => (
	<div className={classNames.integration}>
		<Description
			title="Lanca Bridging Framework"
			subtitle="Integrate new chains and assets in under 2 hours"
			text="Highly Scalable, Decentralised and Secure Bridging Mechanism"
			firstButtonText="Integrate"
			secondButtonText="Documentation"
			isComingSoon
		/>
		<BridgingVisual />
	</div>
)

const MemoizedSDKIntegration = memo(SDKIntegration)
const MemoizedBridgingIntegration = memo(BridgingIntegration)

const Integration: FC = (): JSX.Element => (
	<>
		<MemoizedSDKIntegration />
		<MemoizedBridgingIntegration />
	</>
)

export default Integration
