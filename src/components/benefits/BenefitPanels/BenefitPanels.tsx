import { FC, memo } from "react";
import BenefitPanel from "./BenefitPanel/BenefitPanel";
import Speed from "./VisualContainers/Speed";
import Tokens from "./VisualContainers/Tokens";
import classNames from './BenefitPanels.module.pcss';
import Divider from "../../common/Divider";

const BenefitPanels: FC = () => (
    <div className={classNames['benefit-panels']}>
        <BenefitPanel title="Consistently quick" description="Experience rapid cross-chain transactions completed within 30 seconds, ensuring efficient and timely operations">
            <Speed />
        </BenefitPanel>
        <Divider />
        <BenefitPanel title="Any token to Any chain" description="Experience rapid cross-chain transactions completed within 30 seconds, ensuring efficient and timely operations">
            <Tokens />
        </BenefitPanel>
        <Divider />
    </div>
);

export default memo(BenefitPanels);