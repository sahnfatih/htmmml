import React from "react";
export interface TextComponentProps {
    text: string;
    variant?: 'paragraph' | 'heading1' | 'heading2' | 'heading3';
    color?: string;
    fontSize?: number | string;
    fontWeight?: number | string;
    lineHeight?: number | string;
    textAlign?: 'left' | 'center' | 'right';
    margin?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    };
    letterSpacing?: number;
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    textDecoration?: 'none' | 'underline' | 'line-through';
}
declare const TextComponent: React.FC<TextComponentProps>;
export default TextComponent;
//# sourceMappingURL=index.d.ts.map