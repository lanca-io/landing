import { FC } from 'react'
import classNames from './BridgingVisual.module.pcss'

const BridgingVisual: FC = () => {
	return (
		<div className={classNames['visual__container']}>
			<div className={classNames['main__image-container']}>
				<img src="/Integrations2.png" className={classNames['main__image']} />
			</div>
		</div>
	)
}

export default BridgingVisual
