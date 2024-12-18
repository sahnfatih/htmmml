// src/components/BannerComponent/index.tsx
import React from "react";
const BannerComponent = ({ text, image, button }) => {
    return (React.createElement("a", { href: button.href, style: { display: "flex", alignItems: "center", gap: "10px" } },
        React.createElement("img", { src: image.src, alt: "Banner", style: { maxWidth: "100px" } }),
        React.createElement("p", null, text)));
};
export default BannerComponent;
//# sourceMappingURL=index.js.map