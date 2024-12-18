import React from 'react';
import { KirazImage } from '../../types/types';
export interface ProductBoxProps {
    image: KirazImage;
    title: string;
    slug: string;
    productUrl: string;
    price: number;
    delPrice?: number;
    showDiscount?: boolean;
    showQuickView?: boolean;
    showAddToCart?: boolean;
    showWishlist?: boolean;
    imageAspectRatio?: string;
    imageFit?: 'cover' | 'contain';
}
declare const ProductBox: React.FC<ProductBoxProps>;
export default ProductBox;
//# sourceMappingURL=index.d.ts.map