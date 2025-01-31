import { FC } from 'react'
import classNames from './SDKVisual.module.pcss'

const SDKVisual: FC = () => {
	return (
		<div className={classNames['visual__container']}>
			<div className={classNames['main__image-container']}>
				<img src="/SDK.png" className={classNames['main__image']} />
				<img src="/Add.png" className={classNames['second__image']} />
			</div>
		</div>
	)
}

export default SDKVisual
