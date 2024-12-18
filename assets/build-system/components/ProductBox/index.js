import React from 'react';
import * as S from './styles';
const ProductBox = ({ image, title, slug, productUrl, price, delPrice }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price);
    };
    const calculateDiscount = (oldPrice, newPrice) => {
        return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    };
    return (React.createElement(S.ProductBox, null,
        React.createElement(S.ProductLink, { href: productUrl, title: title },
            React.createElement(S.ImageWrapper, null,
                React.createElement(S.ProductImage, { src: image.src, alt: title, loading: "lazy" }),
                delPrice && (React.createElement(S.DiscountBadge, null,
                    calculateDiscount(delPrice, price),
                    "%"))),
            React.createElement(S.ContentWrapper, null,
                React.createElement(S.Title, null, title),
                React.createElement(S.PriceWrapper, null,
                    React.createElement(S.CurrentPrice, null, formatPrice(price)),
                    delPrice && (React.createElement(S.OldPrice, null, formatPrice(delPrice))))))));
};
export default ProductBox;
//# sourceMappingURL=index.js.map