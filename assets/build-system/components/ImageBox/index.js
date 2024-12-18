// src/components/ImageBox/index.tsx
import React from "react";
const ImageBox = ({ image }) => {
    return React.createElement("img", { src: image.src, alt: "Image Box", style: { maxWidth: "100%" } });
};
export default ImageBox;
//# sourceMappingURL=index.js.map