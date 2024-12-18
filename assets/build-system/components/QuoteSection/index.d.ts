import React from 'react';
import { KirazImage } from '../../types/types';
export interface QuoteProps {
    bannerImage: KirazImage;
    quote: string;
    author: string;
    showOverlay?: boolean;
    overlayColor?: string;
    overlayOpacity?: number;
    textColor?: string;
    textAlignment?: 'left' | 'center' | 'right';
    quoteStyle?: {
        fontSize?: string | number;
        fontWeight?: string | number;
        fontStyle?: 'normal' | 'italic';
    };
    authorStyle?: {
        fontSize?: string | number;
        fontWeight?: string | number;
        color?: string;
    };
    padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    backgroundPosition?: string;
    backgroundSize?: 'cover' | 'contain' | 'auto';
    height?: string | number;
    showQuoteIcon?: boolean;
    quoteIconColor?: string;
    quoteIconSize?: number;
}
declare const QuoteSection: React.FC<QuoteProps>;
export default QuoteSection;
//# sourceMappingURL=index.d.ts.map