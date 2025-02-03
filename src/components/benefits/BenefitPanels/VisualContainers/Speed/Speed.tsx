import { FC, memo } from 'react';
import classNames from './Speed.module.pcss';
import InfoCard from './InfoCard/InfoCard';
import RefreshIcon from '../../../../../assets/icons/RefreshIcon';
import BridgeIcon from '../../../../../assets/icons/BridgeIcon';

const Speed: FC = () => (
    <div className={classNames.speed__illustration}>
        <div className={classNames.speed__cardContainer1}>
            <InfoCard icon={<RefreshIcon />} title="Avg Tx time" text="10 sec" />
        </div>
        <div className={classNames.speed__cardContainer2}>
            <InfoCard icon={<BridgeIcon />} title="Avg Bridge time" text="30 sec" />
        </div>
    </div>
);

export default memo(Speed);