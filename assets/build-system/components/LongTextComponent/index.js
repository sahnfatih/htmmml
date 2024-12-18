import React from "react";
import styles from "./LongTextComponent.module.css";
const LongTextComponent = ({ welcomeTitle, mainTitle, subtitle, description }) => {
    return (React.createElement("div", { className: styles.welcomeSection },
        welcomeTitle && React.createElement("div", { className: styles.welcomeTitle }, welcomeTitle),
        React.createElement("h1", { className: styles.mainTitle }, mainTitle),
        subtitle && React.createElement("h2", { className: styles.subtitle }, subtitle),
        React.createElement("p", { className: styles.description }, description)));
};
export default LongTextComponent;
//# sourceMappingURL=index.js.map