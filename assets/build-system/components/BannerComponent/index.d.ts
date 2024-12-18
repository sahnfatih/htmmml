import React from "react";
import { KirazImage } from "../../types/types";
export interface BannerComponentProps {
    image: KirazImage;
    text: string;
    button: {
        href: string;
        label: string;
        variant?: 'primary' | 'secondary' | 'outline';
    };
    showOverlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    textColor?: string;
    textAlignment?: 'left' | 'center' | 'right';
    height?: number | string;
    backgroundColor?: string;
    padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    buttonStyle?: {
        backgroundColor?: string;
        textColor?: string;
        borderRadius?: number;
        padding?: string;
    };
}
declare const BannerComponent: React.FC<BannerComponentProps>;
export default BannerComponent;
//# sourceMappingURL=index.d.ts.map