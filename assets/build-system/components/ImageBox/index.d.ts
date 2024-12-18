import React from "react";
import { KirazImage } from "../../types/types";
export interface ImageBoxProps {
    image: KirazImage;
    showCaption?: boolean;
    caption?: string;
    link?: string;
    borderRadius?: number;
    shadow?: boolean;
    objectFit?: 'cover' | 'contain';
    aspectRatio?: string;
    showHoverEffect?: boolean;
    backgroundColor?: string;
    width?: string | number;
    height?: string | number;
    opacity?: number;
    filter?: string;
    transform?: string;
    transition?: string;
}
declare const ImageBox: React.FC<ImageBoxProps>;
export default ImageBox;
//# sourceMappingURL=index.d.ts.map