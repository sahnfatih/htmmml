// src/components/ImageBox/index.tsx
import React from "react";
import styles from "./RoundImageHeroComponent.module.css";
const RoundImageHeroComponent = ({ image }) => {
    return (React.createElement("div", { className: styles.imageSection },
        React.createElement("img", { src: image.src, alt: image.alt })));
};
export default RoundImageHeroComponent;
//# sourceMappingURL=index.js.map