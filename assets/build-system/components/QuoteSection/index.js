import React from 'react';
import styles from "./QuoteSection.module.css";
const QuoteSection = ({ bannerImage, quote, author }) => {
    const sectionStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bannerImage.src}) center/cover no-repeat`,
    };
    return (React.createElement("div", { className: styles.quoteSection, style: sectionStyle },
        React.createElement("div", { className: styles.quoteContainer },
            React.createElement("div", { className: styles.quoteText }, quote),
            React.createElement("div", { className: styles.quoteAuthor }, author))));
};
export default QuoteSection;
//# sourceMappingURL=index.js.map