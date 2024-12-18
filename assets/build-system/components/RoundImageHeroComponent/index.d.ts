import React from "react";
import { KirazImage } from "../../types/types";
export interface RoundImageHeroComponentProps {
    image: KirazImage;
    showOverlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    borderRadius?: number;
    height?: number | string;
    showHoverEffect?: boolean;
    link?: string;
    aspectRatio?: string;
    objectFit?: 'cover' | 'contain';
}
declare const RoundImageHeroComponent: React.FC<RoundImageHeroComponentProps>;
export default RoundImageHeroComponent;
//# sourceMappingURL=index.d.ts.map