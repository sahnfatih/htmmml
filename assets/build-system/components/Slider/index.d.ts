import React from 'react';
import { KirazImage } from '../../types/types';
export interface SliderProps {
    slides: Array<{
        image: KirazImage;
        title?: string;
        description?: string;
        link?: string;
        buttonText?: string;
        buttonVariant?: 'primary' | 'secondary' | 'outline';
    }>;
    showControls?: boolean;
    showDots?: boolean;
    autoPlay?: boolean;
    interval?: number;
    effect?: 'fade' | 'slide';
    height?: number | string;
    aspectRatio?: string;
    borderRadius?: number;
    showArrows?: boolean;
    arrowStyle?: 'default' | 'round' | 'square';
    arrowColor?: string;
    dotStyle?: 'default' | 'round' | 'square';
    dotColor?: string;
    overlayGradient?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    textAlignment?: 'left' | 'center' | 'right';
    titleStyle?: {
        fontSize?: string | number;
        fontWeight?: string | number;
        color?: string;
    };
    descriptionStyle?: {
        fontSize?: string | number;
        fontWeight?: string | number;
        color?: string;
    };
}
declare const Slider: React.FC<SliderProps>;
export default Slider;
//# sourceMappingURL=index.d.ts.map