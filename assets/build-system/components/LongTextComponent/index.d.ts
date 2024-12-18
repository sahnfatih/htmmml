import React from "react";
export interface LongTextComponentProps {
    welcomeTitle?: string;
    mainTitle: string;
    subtitle?: string;
    description: string;
    showDivider?: boolean;
    textAlignment?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    textColor?: string;
    maxWidth?: number | string;
    padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
}
declare const LongTextComponent: React.FC<LongTextComponentProps>;
export default LongTextComponent;
//# sourceMappingURL=index.d.ts.map