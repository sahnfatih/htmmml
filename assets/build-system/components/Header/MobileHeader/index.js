import React from 'react';
import "../styles/style.css";
const MobileHeader = ({ logo, links }) => {
    return (React.createElement("div", { className: "header-container" },
        React.createElement("div", { className: "header-logo" },
            React.createElement("img", { src: logo.src, alt: logo.alt })),
        React.createElement("nav", { className: "header-nav" }, links === null || links === void 0 ? void 0 : links.map((link, index) => (React.createElement("div", { key: index, className: link.sublinks.length ? "dropdown" : "" },
            React.createElement("a", { href: link.href }, link.label),
            link.sublinks.length > 0 && (React.createElement("div", { className: "dropdown-menu" }, link.sublinks.map((sublink, subIndex) => (React.createElement("a", { key: subIndex, href: sublink.href }, sublink.label)))))))))));
};
export default MobileHeader;
//# sourceMappingURL=index.js.map