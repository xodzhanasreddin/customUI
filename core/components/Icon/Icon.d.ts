import * as React from 'react';
import { IconName } from '../../lib';
interface IIconProps extends React.SVGAttributes<SVGElement> {
    iconName: IconName;
    className?: string;
}
declare const Icon: React.SFC<IIconProps>;
export { Icon, IIconProps };
